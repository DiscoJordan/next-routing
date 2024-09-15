interface ParamsType {
  name: string;
}

export default function Name({ params }: { params: ParamsType }) {
  return (
    <main>
      <h1>{params.name}</h1>
    </main>
  );
}