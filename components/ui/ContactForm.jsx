"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const contactSchema = z.object({
  email: z.string().email({ message: "A valid email is required." }),
  subject: z.string().min(1, { message: "This field is required" }),
  name: z.string().min(1, { message: "This field is required" }),
  message: z.string().min(1, { message: "This field is required" }),
});

export function ContactForm() {
  const form = useForm({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      email: "",
      subject: "",
      name: "",
      message: "",
    },
  });

  function onSubmit(values) {
    // handle form submission
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 p-6 bg-[#223049] rounded-xl border border-[#fdb86b] max-w-md mx-auto">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input className="bg-[#192233] text-[#fdb86b] border-[#fdb86b] focus:border-[#fdb86b]" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex gap-4">
          <FormField
            control={form.control}
            name="subject"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel>Subject</FormLabel>
                <FormControl>
                  <Input className="bg-[#192233] text-[#fdb86b] border-[#fdb86b] focus:border-[#fdb86b]" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input className="bg-[#192233] text-[#fdb86b] border-[#fdb86b] focus:border-[#fdb86b]" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <textarea rows={6} className="bg-[#192233] text-[#fdb86b] border-[#fdb86b] focus:border-[#fdb86b] rounded-lg w-full p-2 resize-none" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex justify-end">
          <Button type="submit" className="border border-[#fdb86b] text-[#fdb86b] hover:bg-[#fdb86b] hover:text-[#223049] bg-transparent px-6 py-2 rounded-md font-medium">
            Send
          </Button>
        </div>
      </form>
    </Form>
  );
}
