import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Twitch,
  Twitter,
  Code2,
} from "lucide-react";
import { cn } from "../lib/utils";
import { useToast } from "../hooks/use-toast";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        "service_kyy5lxs",
        "template_za2hhjj",
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: "Khoi Pham",
        },
        "OnBzCD4-iftg0k1aZ"
      );

      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });

      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error("Error sending message:", error);
      toast({
        title: "Error",
        description: "Something went wrong. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold mb-6 text-center relative"
          >
            Get In{" "}
            <span className="text-primary relative">
              Touch
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-primary/30 rounded-full"></span>
            </span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto text-lg"
          >
            Have a project in mind or want to collaborate? Feel free to reach
            out. I'm always open to discussing new opportunities.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <motion.div variants={itemVariants} className="space-y-10">
              <h3 className="text-2xl md:text-3xl font-semibold mb-8 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                Contact Information
              </h3>

              <div className="space-y-8">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="flex flex-col items-center group cursor-pointer"
                >
                  <a
                    href="mailto:dangkhoipham80@gmail.com"
                    className="p-4 rounded-2xl bg-primary/10 group-hover:bg-primary/20 transition-all duration-300 mb-2"
                  >
                    <Mail className="h-7 w-7 text-primary" />
                  </a>
                  <h4 className="font-medium text-lg">Email</h4>
                  <a
                    href="mailto:dangkhoipham80@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors text-center"
                  >
                    dangkhoipham80@gmail.com
                  </a>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="flex flex-col items-center group cursor-pointer"
                >
                  <a
                    href="tel:+84795335577"
                    className="p-4 rounded-2xl bg-primary/10 group-hover:bg-primary/20 transition-all duration-300 mb-2"
                  >
                    <Phone className="h-7 w-7 text-primary" />
                  </a>
                  <h4 className="font-medium text-lg">Phone</h4>
                  <a
                    href="tel:+84795335577"
                    className="text-muted-foreground hover:text-primary transition-colors text-center"
                  >
                    +(84) 795 335 577
                  </a>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="flex flex-col items-center group cursor-pointer"
                >
                  <a
                    href="https://maps.google.com/?q=Ho+Chi+Minh+City,+Vietnam"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 rounded-2xl bg-primary/10 group-hover:bg-primary/20 transition-all duration-300 mb-2"
                  >
                    <MapPin className="h-7 w-7 text-primary" />
                  </a>
                  <h4 className="font-medium text-lg">Location</h4>
                  <a
                    href="https://maps.google.com/?q=Ho+Chi+Minh+City,+Vietnam"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors text-center"
                  >
                    Ho Chi Minh, Vietnam
                  </a>
                </motion.div>
              </div>

              <div className="pt-8">
                <h4 className="font-medium text-lg mb-6 text-center">
                  Connect With Me
                </h4>
                <div className="flex flex-wrap gap-6 justify-center">
                  <motion.a
                    whileHover={{ scale: 1.1, y: -5 }}
                    href="https://www.linkedin.com/in/khoipham4022/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-primary/10 hover:bg-primary/20 transition-all duration-300"
                  >
                    <Linkedin className="h-6 w-6 text-primary" />
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.1, y: -5 }}
                    href="https://leetcode.com/dangkhoi2204/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-primary/10 hover:bg-primary/20 transition-all duration-300"
                  >
                    <Code2 className="h-6 w-6 text-primary" />
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.1, y: -5 }}
                    href="https://www.instagram.com/_dkhoi04/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-primary/10 hover:bg-primary/20 transition-all duration-300"
                  >
                    <Instagram className="h-6 w-6 text-primary" />
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.1, y: -5 }}
                    href="https://www.facebook.com/dang.khoi.344669"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-primary/10 hover:bg-primary/20 transition-all duration-300"
                  >
                    <Facebook className="h-6 w-6 text-primary" />
                  </motion.a>
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="gradient-border p-8">
              <h3 className="text-2xl md:text-3xl font-semibold mb-8 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                Send a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-2"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-300"
                    placeholder="Enter your name..."
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2"
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-300"
                    placeholder="Enter your email..."
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-2"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-300 resize-none"
                    placeholder="Hello, I'd like to talk about..."
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={isSubmitting}
                  className={cn(
                    "cosmic-button w-full flex items-center justify-center gap-2 group relative overflow-hidden"
                  )}
                >
                  <span className="relative z-10">
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </span>
                  <Send size={18} className="relative z-10" />
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </motion.button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
