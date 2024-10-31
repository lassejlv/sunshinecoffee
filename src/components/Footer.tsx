import { FooterData } from "@/lib/data";


export default function Footer() {

  return (
    <footer className="bg-dark-100 text-white py-16 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Contact Section */}
        <div>
          <h3 className="text-lg font-medium mb-4">{FooterData.contact.title}</h3>
          <ul className="space-y-2">
            {FooterData.contact.details.map((detail, index) => (
              <li key={index} className="text-zinc-300">{detail}</li>
            ))}
          </ul>
        </div>

        {/* Legal Section */}
        <div>
          <h3 className="text-lg font-medium mb-4">{FooterData.legal.title}</h3>
          <ul className="space-y-2">
            {FooterData.legal.links.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="text-zinc-300 hover:text-white transition-colors duration-200"
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* About Section */}
        <div>
          <h3 className="text-lg font-medium mb-4">{FooterData.about.title}</h3>
          <ul className="space-y-2">
            {FooterData.about.links.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="text-zinc-300 hover:text-white transition-colors duration-200"
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}
