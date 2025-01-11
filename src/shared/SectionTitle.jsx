

export default function SectionTitle({heading, subHeading}) {
  return (
    <div className="md:w-3/12 text-center mx-auto my-5">
        <p className="text-yellow-600"> --- {subHeading} --- </p>
        <h1 className="text-4xl uppercase border-y-2 py-2 font-bold"> {heading} </h1>
    </div>
  )
}
