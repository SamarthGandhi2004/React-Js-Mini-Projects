import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactForm(){
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  const SERVICE_ID = "YOUR_SERVICE_ID";
  const TEMPLATE_ID = "YOUR_TEMPLATE_ID";
  const PUBLIC_KEY = "YOUR_PUBLIC_KEY";

  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY);
      setStatus({ ok: true, msg: "Message sent successfully!"});
      formRef.current.reset();
    } catch (err) {
      console.error(err);
      setStatus({ ok: false, msg: "Failed to send message. Try again later."});
    } finally {
      setLoading(false);
      setTimeout(()=>setStatus(null), 5000);
    }
  };

  return (
    <div className="rounded-2xl p-6 shadow glass max-w-2xl">
      <form ref={formRef} onSubmit={sendEmail} className="space-y-4">
        <div>
          <label className="text-sm">Name</label>
          <input required name="user_name" className="w-full mt-1 p-2 rounded border" />
        </div>
        <div>
          <label className="text-sm">Email</label>
          <input required name="user_email" type="email" className="w-full mt-1 p-2 rounded border" />
        </div>
        <div>
          <label className="text-sm">Phone</label>
          <input name="user_phone" className="w-full mt-1 p-2 rounded border" />
        </div>
        <div>
          <label className="text-sm">Role</label>
          <select name="user_role" className="w-full mt-1 p-2 rounded border">
            <option>Job Seeker</option>
            <option>Employer</option>
          </select>
        </div>
        <div>
          <label className="text-sm">Message</label>
          <textarea required name="message" rows="4" className="w-full mt-1 p-2 rounded border" />
        </div>

        <div>
          <button type="submit" className="bg-brand-500 text-white px-4 py-2 rounded" disabled={loading}>
            {loading ? "Sending..." : "Send Message"}
          </button>
        </div>

        {status && (
          <div className={`mt-2 text-sm ${status.ok ? "text-green-600" : "text-red-600"}`}>{status.msg}</div>
        )}
      </form>
    </div>
  );
}
