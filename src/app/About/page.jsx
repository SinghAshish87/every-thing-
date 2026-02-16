
import '../styles/glowing.module.css'; // Adjust path to where your CSS file is located


export default function About() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="rainbow-glowing-border rounded-lg p-8 shadow-lg bg-white">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-4">About Us</h1>
        <p className="text-lg text-gray-700 leading-relaxed">
          Welcome to the About page! We are a team passionate about delivering the best content to help you achieve your goals. Our mission is to make complex topics easy to understand and enjoyable to learn. Whether you're exploring new technologies, languages, or concepts, we're here to guide you along the way.
        </p>
      </div>
    </div>
  );
}
