import { Button, Rating } from "@mui/material";
import { MdKeyboardArrowDown } from "react-icons/md";

const ReviewCard = () => {
  return (
    <div className="w-10/12 border min-h-52 neutral-200 rounded-2xl  shadow-md p-3">
      <div className="flex justify-between">
        <h2 className="text-xl ">Review Url</h2>
        <Rating />
      </div>
      <div className="py-2">
        <span className="italic">Day/Month/Year</span>
      </div>
      <div className=" h-20 overflow-hidden border">
        <p className="text-ellipsis">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
          incidunt illum exercitationem! Eaque, delectus fuga minima rem
          doloremque possimus officiis dolore cupiditate molestiae illum debitis
          quaerat neque vero quo vel amet impedit pariatur ratione dolorem
          perspiciatis magni odio. Soluta rem autem aliquid accusamus laudantium
          dicta dolorum ipsum suscipit quod amet quas sint perferendis, officiis
          iure omnis reprehenderit cum nobis doloribus laborum explicabo veniam
          ullam repudiandae id eum. Quae, nisi provident, facere ipsa maiores
          quia illo consequatur molestiae labore tenetur assumenda quaerat
          accusantium, beatae laborum doloremque itaque et natus! Similique
          deserunt ducimus vel ipsam incidunt, possimus ad aut repellendus modi
          exercitationem eos, numquam, dolorem cupiditate! Dolore similique
          molestiae adipisci praesentium dolorem sed odio atque quos doloribus
          consectetur. Magni molestias ducimus quibusdam, expedita nam deserunt
          dolores voluptates nostrum, quisquam nobis, natus animi aperiam ea eum
          suscipit commodi eligendi vitae illum repellendus exercitationem
          impedit nemo id. Veniam suscipit ullam dolore voluptatum fuga nihil
          repellat sit excepturi, ratione tenetur ipsam! Quisquam commodi quo
          excepturi voluptates est laudantium cupiditate numquam esse dolore,
          veritatis consectetur blanditiis ratione minima perferendis tempore
          deleniti libero eius repudiandae? Autem inventore nulla, a esse fuga,
          atque fugit architecto aperiam labore provident numquam? Beatae
          repudiandae non eaque provident unde odio temporibus delectus.
        </p>
      </div>
      <div className="py-1 border flex justify-end">
        <Button endIcon={<MdKeyboardArrowDown />}>Options</Button>
      </div>
    </div>
  );
};

export default ReviewCard;
