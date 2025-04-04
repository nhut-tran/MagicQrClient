import Link from "next/link";


export default function Navlink(props: {info : {url: string, text: string}}) {
    return (
     
        <div>
            <Link className="text-sm hover:scale-110 px-9 cursor-pointer nunito-bold" href={props.info.url}>{props.info.text}</Link>
        </div>
 
    );
  }