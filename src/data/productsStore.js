const productsArray = [
  {
    id: 1,
    title: "Rosco Lamp ",
    category: "Mastering 3D Artistry with Blender",
    img: "3D",
    price: 20,
    description: "In Alex Turner's exclusive LearnIt course, you'll dive deep into the captivating world of 3D modeling and rendering using Blender. Discover the fundamentals of 3D design, from creating intricate models to mastering lighting and texturing techniques. Alex's hands-on approach ensures you'll gain practical skills to bring your ideas to life in stunning detail.",
    artist: "Alex Turner",
    thumbnail: "picture artist",
    biography: "Alex Turner is a renowned expert in the world of 3D modeling and rendering. With a passion for digital artistry, Alex has been using Blender as his primary tool for creating stunning 3D visuals for over a decade. His innovative approach to 3D design and rendering has garnered him a global following.",
  },
  {
    id: 2,
    title: "Photography Mastery: Unleash Your Creativity Through the Lens",
    category: "Photography",
    img: "Photo",
    price: 20,
    description: "Join Sarah Mitchell's exclusive LearnIt course and embark on a captivating journey into the world of photography. From mastering the technical aspects of your camera to understanding composition, lighting, and editing techniques, this course covers it all. Sarah's hands-on approach ensures that you'll develop the skills needed to capture stunning photos in any setting.",
    artist: "Sarah Mitchell",
    thumbnail: "picture artist",
    biography: "Sarah Mitchell is a distinguished photographer known for her exceptional expertise in the world of photography. With years of experience capturing breathtaking moments, she has honed her skills in various photography genres, from portrait and landscape to macro and fine art. ",
  },
  {
    id: 3,
    title: "Rosco Lamp ",
    category: "Ceramic Artistry: From Clay to Masterpiece",
    img: "Ceramic",
    price: 20,
    description: "Join Daniel Wright's exclusive LearnIt course and immerse yourself in the captivating world of ceramics. From the fundamentals of clay preparation and hand-building techniques to wheel-throwing mastery and glazing secrets, this course covers it all. Daniel's patient and encouraging teaching style ensures that you'll develop the skills needed to transform clay into exquisite pottery.",
    artist: "Daniel Wright",
    thumbnail: "picture artist",
    biography: "Daniel Wright is a master ceramic artist with a lifelong dedication to the craft. His hands have shaped countless clay creations into stunning works of art over the years. Daniel's passion for ceramics is not just about creating beautiful objects but also about passing on the art to others. ",
  },
  {
    id: 4,
    title: "Sewing Mastery: Unleash Your Creativity with a Needle and Thread",
    category: "Fashion",
    img: "Fashion",
    price: 20,
    description: "Join Emily Turner's exclusive LearnIt course and dive into the enchanting world of sewing. From mastering essential sewing techniques to creating custom clothing and accessories, this course covers it all. Emily's patient and approachable teaching style ensures that you'll develop the skills needed to bring your creative sewing projects to life.",
    artist: "Emily Turner",
    thumbnail: "picture artist",
    biography: "Emily Turner is a seasoned seamstress with a lifelong love for sewing and fashion design. Her nimble fingers and keen eye for detail have transformed fabric into stunning garments, making her a sought-after expert in the world of sewing. Emily's passion extends beyond fashion; she's committed to sharing her sewing knowledge with others.",
  },

  {
    id: 5,
    title: "Rosco Lamp ",
    category: "Illustration",
    img: "Illustration",
    price: 20,
    description: "Join Mia Anderson's exclusive LearnIt course and step into the enchanting world of illustration. From mastering the basics of sketching and inking to exploring digital illustration techniques, this course covers a wide spectrum of artistic styles and mediums. Mia's patient and encouraging teaching style ensures that you'll develop the skills needed to create captivating illustrations that tell stories and evoke emotions.",
    artist: "Mia Anderson",
    thumbnail: "picture artist",
    biography: "Mia Anderson is a highly skilled illustrator with a passion for bringing imagination to life through art. With years of experience in various illustration styles, she has honed her craft and established herself as a respected artist in the illustration community. Mia's commitment to nurturing creativity extends to teaching, where she guides aspiring artists to unleash their potential. ",
  },

  {
    id: 6,
    title: "Video Editing Mastery: Craft Compelling Visual Stories",
    category: "Video editing ",
    img: "Video",
    price: 20,
    description: "Join Ethan Parker's exclusive LearnIt course and dive into the dynamic world of video editing. From mastering video editing software to understanding storytelling techniques and advanced visual effects, this course covers it all. Ethan's patient and comprehensive teaching style ensures that you'll acquire the skills needed to craft engaging and impactful videos.",
    artist: "Ethan Parker",
    thumbnail: "picture artist",
    biography: "Ethan Parker is a seasoned video editor and filmmaker, known for his outstanding work in the world of visual storytelling. With years of experience in the film industry, he has edited and created compelling videos across various genres. Ethan's passion for editing extends beyond his own projects; he's committed to sharing his expertise with aspiring video editors.",
  },
  {
    id: 7,
    title: "Motion Design Mastery: Crafting Visual Narratives in Motion",
    category: "Motion design",
    img: "Product",
    price: 20,
    description: "Join Oliver Hayes' exclusive LearnIt course and immerse yourself in the thrilling world of motion design. From mastering animation software to crafting dynamic and visually stunning motion graphics, this course covers it all. Oliver's patient and innovative teaching style ensures that you'll develop the skills needed to bring your creative concepts to life with motion.",
    artist: "Oliver Hayes",
    thumbnail: "picture artist",
    biography: "Oliver Hayes is a highly skilled motion designer with a profound passion for visual storytelling through motion graphics. His career has been defined by creating captivating animations and designs that have left audiences in awe. Oliver's dedication to the art of motion design extends to teaching, where he empowers aspiring motion designers to unleash their creativity. ",
  },

  {
    id: 8,
    title: "Digital Design Mastery: Crafting User-Centric Web & App Experiences",
    category: "Web & App Design",
    img: "Product",
    price: 20,
    description: "Join Sophia Reynolds' exclusive LearnIt course and embark on a creative journey into the world of web and app design. From mastering design tools and principles to understanding user-centric design and responsive layouts, this course covers it all. Sophia's patient and comprehensive teaching style ensures that you'll develop the skills needed to design stunning and functional digital experiences.",
    artist: "Sophia Reynolds",
    thumbnail: "picture artist",
    biography: "Sophia Reynolds is a seasoned web and app designer, known for her exceptional work in the realm of digital design and user experience. With a career spanning over a decade, she has honed her skills in creating user-friendly and visually appealing websites and applications. Sophia's passion for design is not just professional; she's also committed to imparting her knowledge to aspiring designers.",
  },

  {
    id: 9,
    title: "Drawing Fundamentals: Unlock Your Artistic Potential",
    category: "Drawing Fundamental",
    img: "Drawing",
    price: 20,
    description: "Join Robert Adams' exclusive LearnIt course and immerse yourself in the fundamental principles of drawing. From mastering various drawing techniques, including line, shading, and perspective, to exploring the use of different mediums, this course covers the essentials. Robert's patient and encouraging teaching style ensures that you'll build a solid foundation for your artistic journey.",
    artist: "Name of the artist",
    thumbnail: "Robert Adams",
    biography: "Robert Adams is a passionate artist with a lifelong devotion to drawing. His exceptional talent and commitment to the craft have made him a revered figure in the world of visual arts. Robert's enthusiasm for drawing goes beyond personal fulfillment; he's dedicated to sharing his knowledge and fostering artistic growth in others.",
  },

  {
    id: 10,
    title: "Web Development Essentials: HTML, CSS, and JavaScript Mastery",
    category: "Web development ",
    img: "Product",
    price: 20,
    description: "Join David Mitchell's exclusive LearnIt course and dive into the world of web development using HTML, CSS, and JavaScript. From mastering the fundamentals of front-end coding to building interactive web applications and responsive designs, this course covers it all. David's patient and structured teaching style ensures that you'll acquire the skills needed to create impressive websites and web apps from scratch.",
    artist: "David Mitchell",
    thumbnail: "picture artist",
    biography: "David Mitchell is a seasoned web developer with a wealth of experience in HTML, CSS, and JavaScript. Over the years, he has crafted countless dynamic and user-friendly websites and web applications. David's passion for web development extends to teaching, where he empowers aspiring developers to master the art of coding for the web.",
  },
];

//This function help us get the data of or product through the Id
function getProductData(id) {
  // .find allow us to loop through every single element 
  // In this case the current element is looping trough the product and then we will see if the product.id is equal to the Id that was in from our parameters and is going to return the full object 
  let productData = productsArray.find((product) => product.id == id);
  if (productData == undefined) console.log("Product data does not exist for ID: " + id);
  return productData;
}
export { productsArray, getProductData};
