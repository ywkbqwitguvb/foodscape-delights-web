import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon, Loader2 } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

const bookingSchema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters").max(100, "Name must be less than 100 characters"),
  email: z.string().trim().email("Invalid email address").max(255, "Email must be less than 255 characters"),
  phone: z.string().trim().min(10, "Phone number must be at least 10 digits").max(15, "Phone number must be less than 15 digits"),
  eventType: z.string().min(1, "Please select an event type"),
  eventDate: z.date({
    required_error: "Please select an event date",
  }),
  guests: z.string().min(1, "Please enter number of guests"),
  message: z.string().trim().max(1000, "Message must be less than 1000 characters").optional(),
});

type BookingFormData = z.infer<typeof bookingSchema>;

const Booking = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date>();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
    reset,
  } = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema),
  });

  const eventType = watch("eventType");

  const onSubmit = async (data: BookingFormData) => {
    setIsSubmitting(true);
    
    try {
      // Format the message for WhatsApp
      const whatsappMessage = encodeURIComponent(
        `🎉 NEW BOOKING REQUEST\n\n` +
        `Name: ${data.name}\n` +
        `Email: ${data.email}\n` +
        `Phone: ${data.phone}\n` +
        `Event Type: ${data.eventType}\n` +
        `Event Date: ${format(data.eventDate, "PPP")}\n` +
        `Number of Guests: ${data.guests}\n` +
        `${data.message ? `Message: ${data.message}\n` : ''}` +
        `\nPlease contact me to confirm the booking.`
      );

      // Open WhatsApp with pre-filled message
      window.open(`https://wa.me/2347060992150?text=${whatsappMessage}`, '_blank');

      toast.success("Booking request sent!", {
        description: "We'll contact you shortly to confirm your booking.",
      });

      reset();
      setSelectedDate(undefined);
    } catch (error) {
      console.error("Error submitting booking:", error);
      toast.error("Failed to send booking request", {
        description: "Please try calling us directly at 07060992150",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="booking" className="py-20 bg-background">
      <div className="container px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground font-['Playfair_Display']">
              Book Your Event
            </h2>
            <p className="text-xl text-muted-foreground">
              Fill out the form below and we'll get back to you within 24 hours
            </p>
          </div>

          <Card className="p-8 md:p-10 shadow-elegant animate-scale-in">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Name */}
              <div className="space-y-2">
                <Label htmlFor="name" className="text-base font-semibold">
                  Full Name *
                </Label>
                <Input
                  id="name"
                  placeholder="Enter your full name"
                  {...register("name")}
                  className="h-12"
                />
                {errors.name && (
                  <p className="text-sm text-destructive">{errors.name.message}</p>
                )}
              </div>

              {/* Email and Phone */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-base font-semibold">
                    Email Address *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    {...register("email")}
                    className="h-12"
                  />
                  {errors.email && (
                    <p className="text-sm text-destructive">{errors.email.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-base font-semibold">
                    Phone Number *
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="07060992150"
                    {...register("phone")}
                    className="h-12"
                  />
                  {errors.phone && (
                    <p className="text-sm text-destructive">{errors.phone.message}</p>
                  )}
                </div>
              </div>

              {/* Event Type and Date */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="eventType" className="text-base font-semibold">
                    Event Type *
                  </Label>
                  <Select onValueChange={(value) => setValue("eventType", value)}>
                    <SelectTrigger className="h-12">
                      <SelectValue placeholder="Select event type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="wedding">Wedding</SelectItem>
                      <SelectItem value="birthday">Birthday Party</SelectItem>
                      <SelectItem value="corporate">Corporate Event</SelectItem>
                      <SelectItem value="anniversary">Anniversary</SelectItem>
                      <SelectItem value="private">Private Party</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.eventType && (
                    <p className="text-sm text-destructive">{errors.eventType.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label className="text-base font-semibold">
                    Event Date *
                  </Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={cn(
                          "w-full h-12 justify-start text-left font-normal",
                          !selectedDate && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {selectedDate ? format(selectedDate, "PPP") : "Pick a date"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={selectedDate}
                        onSelect={(date) => {
                          setSelectedDate(date);
                          if (date) setValue("eventDate", date);
                        }}
                        disabled={(date) => date < new Date()}
                        initialFocus
                        className={cn("p-3 pointer-events-auto")}
                      />
                    </PopoverContent>
                  </Popover>
                  {errors.eventDate && (
                    <p className="text-sm text-destructive">{errors.eventDate.message}</p>
                  )}
                </div>
              </div>

              {/* Number of Guests */}
              <div className="space-y-2">
                <Label htmlFor="guests" className="text-base font-semibold">
                  Number of Guests *
                </Label>
                <Input
                  id="guests"
                  type="number"
                  min="1"
                  placeholder="Enter number of guests"
                  {...register("guests")}
                  className="h-12"
                />
                {errors.guests && (
                  <p className="text-sm text-destructive">{errors.guests.message}</p>
                )}
              </div>

              {/* Message */}
              <div className="space-y-2">
                <Label htmlFor="message" className="text-base font-semibold">
                  Additional Information (Optional)
                </Label>
                <Textarea
                  id="message"
                  placeholder="Tell us about any special requirements, dietary restrictions, or preferences..."
                  rows={4}
                  {...register("message")}
                  className="resize-none"
                />
                {errors.message && (
                  <p className="text-sm text-destructive">{errors.message.message}</p>
                )}
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="w-full h-14 text-lg font-semibold bg-gradient-primary hover:opacity-90 transition-opacity shadow-elegant"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Sending Request...
                  </>
                ) : (
                  "Send Booking Request"
                )}
              </Button>

              <p className="text-sm text-muted-foreground text-center">
                By submitting this form, you agree to be contacted by Foodxcape by Sharon
              </p>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Booking;
