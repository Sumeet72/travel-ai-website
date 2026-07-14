import emailjs from "@emailjs/browser";

export const sendEmail = (data) => {
  return emailjs.send(
    "service_59vs8ff",
    "template_rcdqk4j",
    {
      name: data.name,
      email: data.email,
      message: data.message,
    },
    "utdzxq3oWSevKo_n2"
  );
};