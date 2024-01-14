import axios from "axios";
import Image
 from "next/image";
export default async function Home() {
  const data = await axios.get(
    "https://cms.redmango.agency/wp-json/wp/v2/posts/16307?_embed"
  );
  

  console.log(data.data._embedded["wp:featuredmedia"][0].source_url);
  
  return <>
  <Image
                src={data.data._embedded["wp:featuredmedia"][0].source_url}
                alt="immagine"
                width={100}
                height={100}
              />



  </>;
}
