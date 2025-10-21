export default function Section2() {
  return (
    <section id="about" className="min-h-[70vh]">
      {/* text about */}
      <div className="mb-12 flex flex-col gap-2">
        <p className="text-center text-xl font-semibold">About me</p>
        <div className="flex items-center justify-center gap-3">
          <div className="h-1 w-15 border-b-2 border-black" />
          <div className="h-3 w-3 rotate-45 bg-black" />
          <div className="h-1 w-15 border-b-2 border-black" />
        </div>
      </div>

      {/* biografi singkat */}
      <div className="justify-center flex">
        <div className="flex w-1/2 flex-col items-center justify-center text-center">
          <p className="text-xl font-semibold text-neutral-500">I'm a Developer (tapi boong)</p>
          <p className="mb-3 text-2xl font-bold capitalize">yahahaha karena aku kalo dirumah push reng emel daripada ngoding.</p>
          <p className="italic">
            Aku Adalah aku. aku malas ngoding tapi ingin menjadi programer handal dan bos programer aku.aku pengen ngoding php agar mendapatkan mobil lamborgini rumah bagus,tapi itu hanya mimpi karena aku malas ngoding
            .
          </p>
          <p className="italic text-red-600">
          WARNING AKU ADALAH PSIKOPAT YANG SUKA MENYIKSA CHAT GPT,CALUDE,DAN GEMINI DENGAN TIDAK MANUSIAWI
          </p>
        </div>
      </div>
    </section>
  )
}
