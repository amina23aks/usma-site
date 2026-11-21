"use client";
import { useState } from "react";
export default function ContactForm() {
  const [sent, setSent] = useState(false);
  return (
    <form
      className="form-panel"
      onSubmit={(event) => {
        event.preventDefault();
        event.currentTarget.reset();
        setSent(true);
      }}
    >
      <label htmlFor="contact-name">Votre nom</label>
      <input
        id="contact-name"
        name="name"
        autoComplete="name"
        required
        maxLength={100}
      />
      <label htmlFor="contact-email">Votre e-mail</label>
      <input
        id="contact-email"
        name="email"
        type="email"
        autoComplete="email"
        required
        maxLength={200}
      />
      <label htmlFor="contact-message">Votre message</label>
      <textarea
        id="contact-message"
        name="message"
        required
        maxLength={2000}
        rows={5}
      />
      <button className="button" type="submit">
        Tester l’envoi
      </button>
      <p className="small muted">
        Formulaire de démonstration. Aucun message n’est transmis.
      </p>
      <p role="status" className="form-status">
        {sent
          ? "Confirmation simulée. Aucune information n’a été envoyée ni enregistrée."
          : ""}
      </p>
    </form>
  );
}
