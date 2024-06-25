export default function page({ params }) {
  const id = params.newsid;

  return (
    <div>
      {id == 1 && <h1>Yash is the senior developer</h1>}
      {id == 3 && <h1>Suresh is the backend developer</h1>}
      {id == 2 && <h1>Vaibhav is the Frontend developer</h1>}

      {id!=1 && id!=2 && id!=3 && <h1>Developer not found</h1>}
    </div>
  );
}
