

const About = () => {
  return (
    <section className="w-full min-h-screen bg-gradient-to-b from-sky-900 to-[#072f46] py-20 text-white">

      <div className="max-w-5xl mx-auto px-6 space-y-16">

        <div className="text-center space-y-3">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight">
            About Me
          </h1>
          <p className="text-sky-200 text-lg max-w-2xl mx-auto opacity-90">
            Una pequeña historia sobre quién soy, qué hago y por qué disfruto tanto construir paginas web.
          </p>
        </div>

        <div className="space-y-8 leading-relaxed text-lg opacity-95">

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Reiciendis, ab earum. Odit quidem perspiciatis eaque sed tempore 
            excepturi reprehenderit repellat soluta porro molestiae.
          </p>

          <p>
            Neque eum magni dolorem ducimus ratione animi harum repellat, 
            officiis quasi excepturi sint nesciunt libero cupiditate asperiores 
            assumenda illum? A, aspernatur! Lorem ipsum dolor sit amet.
          </p>

          <p>
            Enim voluptatum unde voluptatem labore laborum delectus dolores 
            explicabo expedita perspiciatis numquam sunt pariatur corporis, 
            aliquid velit deserunt. Lorem ipsum dolor sit amet consectetur.
          </p>

        </div>

    
        <div className="space-y-6">
          <h2 className="text-3xl font-bold">Education</h2>

          <ul className="list-disc list-inside space-y-2 text-lg opacity-95">
            <li>Programación Web – FreeCodeCamp</li>
            <li>Full Stack Developer – Soy Henry</li>
            
          </ul>
        </div>


        <div className="space-y-6">
          <h2 className="text-3xl font-bold">What I Do</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 shadow-xl border border-white/10">
              <h3 className="text-2xl font-semibold mb-3">Frontend Development</h3>
              <p className="opacity-95">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Ipsum eveniet dolor voluptate natus exercitationem.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 shadow-xl border border-white/10">
              <h3 className="text-2xl font-semibold mb-3">Backend APIs</h3>
              <p className="opacity-95">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                Architecto ipsa eveniet ad pariatur.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 shadow-xl border border-white/10">
              <h3 className="text-2xl font-semibold mb-3">UI / UX Design</h3>
              <p className="opacity-95">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Provident dignissimos neque fuga.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 shadow-xl border border-white/10">
              <h3 className="text-2xl font-semibold mb-3">Deploy & Optimization</h3>
              <p className="opacity-95">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
