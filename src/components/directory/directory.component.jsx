import DirectoryItem from "../directory-item/directory-item.component";

import { DirectoryContainer } from "./directory.style";

const categories = [
  {
    id: 1,
    title: "hats",
    imageUrl: "https://i.ibb.co/qxSgRg2/hats.jpg",
    route: "shop/hats",
  },
  {
    id: 2,
    title: "jackets",
    imageUrl: "https://i.ibb.co/b27r5qz/jackets.jpg",
    route: "shop/jackets",
  },
  {
    id: 3,
    title: "sneakers",
    imageUrl: "https://i.ibb.co/NV4kT1w/sneakers.jpg",
    route: "shop/sneakers",
  },
  {
    id: 4,
    title: "womens",
    imageUrl: "https://i.ibb.co/HFXhGgK/image.jpg",
    route: "shop/womens",
  },
  {
    id: 5,
    title: "mens",
    imageUrl: "https://i.ibb.co/3YpGwXk/men.jpg",
    route: "shop/mens",
  },
];

const Directory = () => {
  return (
    <DirectoryContainer>
      {categories.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </DirectoryContainer>
  );
};

export default Directory;
