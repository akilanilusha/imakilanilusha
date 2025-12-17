export default function Footer() {
  return (
    <footer className="border-t border-orange-300/60 pb-24 md:pb-4">
      <div className="max-w-7xl mx-auto px-6 py-8 text-center">
        <p className="text-gray-600 text-md">
          © {new Date().getFullYear()} Akila Nilusha. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
