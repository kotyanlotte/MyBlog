import { Stack } from "@chakra-ui/react";

export const CardList = ({ blog }) => {
  return (
    <ul className=" grid gap-5 grid-cols-cardResGrid px-5 sm:grid-cols-cardGrid md:pl-0 xl:grid-cols-3">
      {blog.map((item) => {
        return (
          <div className="cardComponent duration-500 hover:hoverEffect" key={item.id}>
            <Stack spacing={{ base: 1, sm: 2.5, md: 3.5 }}>
              <img className="h-24" src={item.images.url} alt="プロフィール画像" />
              <p className="font-semibold  text-gray-600 sm:text-center h-12 sm:h-6">
                {item.title}
              </p>
              <p className="text-gray-400 text-right text-xs">
                {new Date(item.publishedAt).toLocaleDateString()}
              </p>
            </Stack>
          </div>
        );
      })}
    </ul>
  );
};
