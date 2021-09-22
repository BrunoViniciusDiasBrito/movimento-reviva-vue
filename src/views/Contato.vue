<template>
  <div class="contact">
    <h1>Contato</h1>
    <ContactForm />
    <Location />
    <InstaSection />
  </div>
</template>

<script>
import ContactForm from "@/components/contactForm";
import Location from "@/components/location";
import InstaSection from "@/components/instagramSection";
export default {
  components: { ContactForm, Location, InstaSection },
};
</script>

<style></style>
