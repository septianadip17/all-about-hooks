import React, { useEffect, useState, useRef } from "react";

const Ref = () => {
  const [name, setName] = useState("");
  const renderCount = useRef(1);

  useEffect(() => {
    renderCount.current += 1;
  });

  return (
    <div className="border-4 border-red-400  mx-auto p-5">
      <h1 className="text-3xl text-start">useRef</h1>
      <div className="flex flex-col gap-2 items-center justify-center m-2">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
          className="w-2/3 border rounded p-2 text-black"
        />
        <h2 className="text-xl">My name is {name}</h2>
        <h2 className="text-xl">I rendered {renderCount.current} times</h2>
      </div>
      <hr className="border-2 border-green-500 my-4" />
      <div className="text-center">
        <h2>This is useRef</h2>
      </div>
      <hr className="border-2 border-green-500 my-4" />
      <div className="flex gap-2 text-center items-center justify-center m-2">
        <p className="w-2/3 text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A sequi
          maxime harum, commodi mollitia corrupti ea sunt aspernatur illum
          perferendis nisi quas porro nam ipsum, deleniti et asperiores,
          consectetur facere officiis ullam. Dolorum, totam, deserunt aut
          consequuntur blanditiis amet repellendus deleniti quidem ut delectus
          voluptate error ipsam perferendis assumenda iste mollitia vitae?
          Aperiam, laudantium libero saepe consequatur voluptatem incidunt vero,
          possimus dolor illo quas iusto qui cum suscipit ipsum doloribus
          obcaecati, praesentium dolorem fugiat exercitationem. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod atque ullam illo, blanditiis exercitationem odit quibusdam laboriosam, ipsa debitis tempora dolorum quas vero dolor sapiente? Adipisci reprehenderit amet, fugiat, sint aliquam similique deserunt, atque inventore at mollitia laborum? Voluptate ratione deleniti maxime alias? Asperiores eveniet consequatur nam, veniam cum voluptatibus, harum quam debitis sit aliquam dolorem? Aut est dolore voluptatem culpa voluptates rem fugit, eum laborum velit earum consequuntur voluptatum officia reprehenderit recusandae itaque quia sint reiciendis similique quaerat ullam expedita non? Assumenda velit recusandae laudantium voluptatem quae quia est perferendis vitae officiis corporis nulla, iste deleniti ipsum a adipisci dolor. Magni, unde. Totam voluptatum vero consectetur voluptatibus quibusdam commodi eum nemo doloremque aspernatur pariatur laborum delectus recusandae neque eligendi atque suscipit, aperiam molestiae minus, laboriosam molestias ipsa unde et. Autem voluptate saepe aliquam et accusantium vitae vero ipsam nam, repellat eveniet similique soluta neque, necessitatibus quam fugiat. Maxime, incidunt! Quod, corporis. Aut consectetur rerum esse suscipit dolores, a exercitationem similique illo vitae ipsa hic soluta assumenda possimus explicabo, quisquam facilis placeat recusandae accusantium. Esse adipisci quisquam explicabo possimus iure porro, quasi beatae exercitationem alias? Odit quas, aliquam id eos quasi dicta, et molestiae eveniet deleniti ipsum at maiores sit quis commodi aperiam error neque quam rem consectetur laudantium accusamus nemo aut! Error quisquam, delectus, dolores, numquam voluptates enim sequi necessitatibus minus cupiditate repellat dolorum. Enim ipsam fugiat qui ad error repellat labore alias voluptatibus temporibus distinctio. Iusto, expedita culpa, veniam labore ut, dolorum aliquam porro nemo aliquid saepe dolorem! Voluptas error obcaecati doloribus quis consectetur, sunt possimus illum! Facilis voluptate ad alias ducimus? Soluta quisquam temporibus eaque, accusamus eveniet aut labore velit. Quod, quaerat, modi ullam deleniti velit saepe placeat similique a minus magnam molestias? Quidem ex optio accusamus dolorem provident ducimus, debitis at, neque esse asperiores eum sed sit. Ducimus, doloremque totam? Maxime autem veniam facilis ad fugiat quia magni. Quia aliquid perferendis nam ex a unde soluta. Error, ipsa ad molestiae iste delectus rem consectetur itaque nihil illo magnam. Voluptatem tempore a quisquam officiis obcaecati possimus deserunt cum aliquam nemo molestias facilis corrupti dolor ratione animi, reprehenderit vero dicta minus modi omnis placeat ea tenetur totam eligendi magnam. Odit similique soluta, neque cum inventore perferendis corrupti, qui nisi nesciunt minus voluptate autem aliquam doloremque et quis quo perspiciatis eveniet modi itaque, tenetur debitis? Illum eligendi asperiores dolore quia cupiditate dicta suscipit deleniti provident placeat ut, magnam quos laborum totam modi maiores repellendus facere natus itaque numquam deserunt enim, aspernatur tempora ea corrupti! Dolorem dolor tenetur repudiandae sed enim rem nulla suscipit nostrum vero illo? Quidem eum possimus illum nesciunt repellendus facilis ipsa qui harum sunt ipsum dolore tenetur expedita, blanditiis at ducimus, excepturi, non quasi a saepe tempore. Ducimus quod quos harum voluptatem expedita odit aut voluptas reiciendis exercitationem. Quia veritatis ipsum blanditiis, aperiam vel saepe, laborum dolore earum mollitia consequuntur animi facilis vero nesciunt aliquam! Atque suscipit ipsam eos quas, ex porro perferendis aut dolor, iste ipsa aliquid at quia quibusdam? Natus omnis modi impedit obcaecati earum architecto ipsa maxime consequatur beatae, facilis ratione tempore, delectus necessitatibus, et dignissimos sunt at saepe possimus similique id illum. Ducimus natus impedit dignissimos. Pariatur, fugiat molestiae vero deserunt minus reprehenderit, ex iure nisi enim obcaecati deleniti, eveniet provident? Soluta maxime maiores nulla consequatur quod voluptas ipsam aperiam vero a minima. Molestiae voluptatum libero, magnam tempora tempore voluptates cupiditate asperiores officiis assumenda atque? Quasi vel, nostrum, rem harum repellendus fugiat cupiditate ab ratione deleniti sed tempora, reiciendis rerum officia veniam aperiam similique nulla ducimus corporis vero! Repellat quam tempora veritatis ex culpa, illo maiores obcaecati, debitis a praesentium officiis similique! Recusandae accusamus fugit repudiandae, officia laborum ut illum cumque voluptatem assumenda, tempora facilis numquam, totam nobis voluptatum vitae ipsam molestiae laboriosam perferendis quam et unde enim? Fugiat minus cum praesentium illo perspiciatis laudantium eos sed, non quis vero inventore molestiae iste quasi. Iste explicabo debitis architecto quibusdam amet quaerat aut exercitationem labore est pariatur at nisi accusamus unde cumque accusantium, impedit saepe quo blanditiis quasi asperiores tempore qui! Quis odio, atque magnam eos quas, hic modi consequatur earum nemo provident eveniet nostrum ullam eaque illum quam. A non similique molestiae commodi ab quo numquam tempora ex minima odit corporis nostrum aperiam rerum rem omnis, voluptate in reiciendis natus error vero mollitia. Maxime vitae corporis quod voluptates architecto quae excepturi pariatur sapiente ea, veritatis reiciendis adipisci quos blanditiis quo debitis libero id unde iusto asperiores corrupti doloremque quisquam. Deserunt dolor sapiente iste ullam reprehenderit quas. Vero sit neque maiores rem suscipit dignissimos, fuga, aliquid quaerat at fugiat, saepe iste. Fugiat distinctio dolor facilis delectus autem natus quasi veritatis quibusdam dignissimos? Quia quisquam, tempora eos repellendus enim ad necessitatibus nulla culpa totam at vero placeat quaerat consectetur quasi explicabo ea nihil libero, voluptates rerum accusantium. Repellendus facilis dolorum fugit ullam voluptates dolore veniam repudiandae, sequi sapiente voluptas a tempora quam, maiores, aperiam suscipit! Harum, eos fuga, quo sapiente facilis cum non nobis quae iure autem nisi exercitationem quos ipsam error illo at unde! Mollitia iure magni qui quae sint beatae, reiciendis ipsum suscipit excepturi nihil vitae quam expedita architecto corporis dignissimos minima veniam repellendus laudantium, officia harum nulla praesentium optio velit? Similique, veniam animi? Dignissimos eaque, natus itaque similique, accusamus culpa illo ipsum aperiam impedit omnis laborum voluptatem commodi quia! Mollitia voluptates exercitationem suscipit, eius minus velit asperiores autem iusto, doloremque fugiat sint placeat similique nulla illo obcaecati? Animi illo voluptatibus labore veritatis, quisquam dignissimos eligendi reiciendis vero molestiae sed perspiciatis officia! Repellat, dolor aliquam quo minima eius quam repellendus eum sint! Error iste esse saepe a excepturi cum nesciunt pariatur, rem perferendis neque tenetur distinctio beatae ipsum aut labore sit unde placeat non ipsam minus laborum maiores fugiat. Commodi iusto debitis neque quibusdam error praesentium repellendus totam asperiores cupiditate quasi deserunt sapiente quod dicta, quam similique nulla consequatur natus modi aut minima harum quis, placeat eos beatae? Dolores possimus earum dicta nostrum facere, quis quidem, similique odio at veritatis officiis labore sit accusamus inventore ab sequi. Velit repellat officiis suscipit voluptatibus!
        </p>
      </div>
      <div className="flex justify-center mt-4">
        <a
          href="https://reactjs.org"
          className="border-2 border-blue-600 p-2 rounded hover:bg-blue-600 hover:text-white transition duration-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </div>
    </div>
  );
};

export default Ref;
