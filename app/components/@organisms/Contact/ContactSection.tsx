"use client";

import { useState } from "react";
import { Container } from "@/app/components/@atoms/Container/Container";
import { Section } from "@/app/components/@atoms/Section/Section";
import { Button } from "@/app/components/@atoms/Button/Button";
import { TextField, TextArea } from "@/app/components/@atoms/Input/Input";
import Link from "next/link";

export function ContactSection() {
  const [form, setForm] = useState({ subject: "", message: "" });

  return (
    <Section title="Contact Us" id="contact">
      <Container>
        <form
          className="grid gap-5 max-w-2xl mx-auto"
          onSubmit={(e) => e.preventDefault()}
        >
          <TextField
            placeholder="Summary of your message..."
            value={form.subject}
            onChange={(e) => setForm({ ...form, subject: e.target.value })}
          />
          <TextArea
            inputType="textarea"
            placeholder="Give as many details as possible..."
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
          />
          <Button asChild type="button" size="lg">
            <Link
              href={`mailto:hello@example.com?subject=${form.subject}&body=${form.message}`}
            >
              Send Message
            </Link>
          </Button>
        </form>
      </Container>
    </Section>
  );
}
