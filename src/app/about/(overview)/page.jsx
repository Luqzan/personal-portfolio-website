import Box from "@/app/ui/components/Box";
import ContactDetail from "@/app/ui/components/ContactDetail";

export default function Page() {
  return (
    <Box className="flex flex-col gap-6">
      <section className="flex flex-col gap-1">
        <h2 className="font-mono font-medium text-2xl mb-4">Contact Details</h2>

        <ContactDetail
          type="tel"
          href="tel:+60194493220"
          display="+6019 449 3220"
        />

        <ContactDetail
          type="email"
          href="mailto:luqzanariff@gmail.com"
          display="luqzanariff@gmail.com"
        />

        <ContactDetail
          type="linkedin"
          href="https://www.linkedin.com/in/luqzan-ariff-666495142/"
          display="Luqzan Ariff"
        />

        <ContactDetail
          type="github"
          href="https://github.com/Luqzan"
          display="Luqzan"
        />
      </section>

      <section className="flex flex-col gap-1"></section>
    </Box>
  );
}
