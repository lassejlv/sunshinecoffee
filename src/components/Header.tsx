

const headerBackgroundImagePath = "/header_image.jpg"

export default function Header({ title }: { title: string }) {



  return (
    <header className="relative h-48 w-full overflow-hidden">
      <div
        className="absolute inset-0 bg-black/30 z-10"
        aria-hidden="true"
      />

      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${headerBackgroundImagePath})`,
        }}
      />

      <div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-2 font-licorice">
          {title}
        </h1>
      </div>
    </header>
  )

}
