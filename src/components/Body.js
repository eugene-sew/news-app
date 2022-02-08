import Featured from "./Featured";
import { data } from "../assets/data";

const Body = () => {
  return (
    <div className="w-screen h-full bg-gray-200 px-10 py-5">
      {/* featured */}
      <main className=" px-5 py-4 rounded shadow mb-5">
        <h1 className="text-3xl font-extrabold text-gray-700 underline mb-5">
          Featured
        </h1>
        <div className="w-full h-48  flex flex-col overflow-hidden overflow-x-scroll gap-5 px-5 py-3 flex-wrap ">
          {data.map((eachItem, index) => {
            return (
              <Featured
                title={eachItem.title}
                body={eachItem.body}
                key={index}
              />
            );
          })}
          {/* 
          <Featured
            title={"Boys Go To School"}
            body={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae a excepturi tenetur totam ea vero velit unde quos placeat autem."
            }
          /> */}
        </div>
      </main>
      <section className="h-full ">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
          possimus illo suscipit dolorem sint? Magnam debitis maiores qui atque
          dicta accusantium repudiandae, enim amet nostrum distinctio beatae
          consequatur alias sed. Eum accusamus, ipsam, quisquam amet error sed
          nemo excepturi voluptatibus adipisci magni necessitatibus a voluptate
          facilis pariatur similique nihil deserunt doloribus quod nulla, rerum
          quasi veniam! Iusto ad esse repellendus necessitatibus! Neque
          reprehenderit quia in ut sapiente, deleniti a aperiam praesentium sint
          molestiae harum odit ipsam cumque. Assumenda consequuntur qui rem
          dolor doloremque repudiandae veritatis quibusdam necessitatibus
          numquam natus corrupti nemo commodi mollitia quos quidem quis aut
          nostrum, repellendus repellat inventore ex in iste! Consequuntur
          molestias explicabo sint alias, ad atque quibusdam temporibus
          asperiores tempore ab excepturi neque. Corrupti unde impedit
          voluptate. Officia dicta ut culpa distinctio officiis dolorem! Sit
          odio ut in. Vero asperiores commodi assumenda? Quidem eius non nam
          voluptas! Recusandae ab hic possimus repellendus consequuntur commodi
          veritatis sed excepturi iure dolores magnam quod nemo, unde quaerat
          similique voluptatibus nobis ad eligendi minus praesentium deleniti
          tempora sapiente libero neque. Nihil maxime nemo, culpa eaque dolor in
          adipisci, ducimus a nobis rerum deleniti facilis, optio quod iure
          pariatur commodi aut vero maiores? Id mollitia voluptate quos dolorem,
          maxime deleniti.
        </p>
      </section>
    </div>
  );
};

export default Body;
