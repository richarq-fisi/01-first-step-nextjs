export default function Home() {
  return (
    <div className="flex flex-col items-center p-24">
      <h1 className="text-5xl">Hola Mundo</h1>
      {new Date().getTime()}
    </div>
  );
}
