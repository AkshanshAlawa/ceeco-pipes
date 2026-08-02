// Formspree lead submission. Falls back to a simulated success while
// REACT_APP_FORMSPREE_ID is not yet configured.
export async function submitLead(formType, payload) {
  const formId = process.env.REACT_APP_FORMSPREE_ID;
  if (!formId) {
    await new Promise((r) => setTimeout(r, 800));
    return { ok: true, mocked: true };
  }
  const res = await fetch(`https://formspree.io/f/${formId}`, {
    method: "POST",
    headers: { Accept: "application/json", "Content-Type": "application/json" },
    body: JSON.stringify({
      ...payload,
      form_type: formType,
      source: window.location.href,
    }),
  });
  if (!res.ok) {
    let msg = "Submission failed. Please try again or email us directly.";
    try {
      const data = await res.json();
      if (Array.isArray(data.errors)) msg = data.errors.map((e) => e.message).join(", ");
    } catch (_) {}
    throw new Error(msg);
  }
  return { ok: true, mocked: false };
}
