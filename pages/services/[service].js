import { useRouter } from "next/router";

const services = {
  "website-design": {
    title: "Website Design",
    description: "We create modern, responsive websites tailored to your needs.",
  },
  "salesforce-administration": {
    title: "Salesforce Administration",
    description: "Helping you onboard and optimize Salesforce for your business.",
  },
  "marketing-automation": {
    title: "Marketing Automation",
    description: "Streamline your marketing with tailored drip funnels.",
  },
  "api-integrations": {
    title: "API Integrations",
    description: "Automate your systems with seamless API integrations.",
  },
  "knowledge-management": {
    title: "Knowledge Management",
    description: "Organize and share your data effectively with our solutions.",
  },
};

export default function ServicePage() {
  const router = useRouter();
  const { service } = router.query; // Get the dynamic route segment

  // Fetch the service data
  const serviceData = services[service];

  if (!serviceData) return <h1>Service Not Found</h1>;

  return (
    <main>
      <h1>{serviceData.title}</h1>
      <p>{serviceData.description}</p>
    </main>
  );
}
