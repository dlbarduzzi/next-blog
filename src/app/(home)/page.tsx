export default function Page() {
  return (
    <div className="px-4 py-8">
      <div className="mx-auto max-w-4xl rounded-md bg-gray-100 px-6 py-4">
        <h1 className="text-lg font-bold tracking-tight">Fun Fact</h1>
        <p className="pt-5 text-base leading-7">
          Did you know that octopuses have three hearts? Two pump blood to the gills,
          while the third pumps it to the rest of the body. But here is the twist: when
          an octopus swims, the heart pumping to the body stops beating! That is one
          reason why they prefer crawling over swimming—it’s less tiring for them!
        </p>
      </div>
      <div className="pt-8">
        <div className="mx-auto max-w-4xl rounded-md bg-gray-100 px-6 py-4">
          <div>
            <code className="font-code text-[15px]">Some code font example here.</code>
          </div>
        </div>
      </div>
    </div>
  )
}
