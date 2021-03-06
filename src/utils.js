const paginate = (followers) => {
  const itemsPerPage = 10;
  const pages = Math.ceil(followers.length / itemsPerPage);

  const newFollowers = Array.from({ length: pages }, (_, index) => {
    const start = index * pages;
    return followers.slice(start, start + itemsPerPage);
  });

  return newFollowers;
};

export default paginate;
