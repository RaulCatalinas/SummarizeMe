import { $ } from '@/utils/dom'

export async function summarizeController(topic: string) {
  const summarizeResult = $('#summarize-result') as HTMLParagraphElement

  summarizeResult.innerText = `
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
    
    Quod blanditiis eligendi autem, dolorem, laboriosam porro magni enim recusandae unde voluptatibus reiciendis debitis sint exercitationem cum pariatur similique doloribus atque dolorum. 
    
    Quam eveniet explicabo cupiditate incidunt excepturi vel voluptas saepe nesciunt commodi maiores enim voluptatibus inventore possimus eius ad velit odio ducimus repudiandae hic perferendis, delectus amet iure? Hic molestias facilis nesciunt excepturi voluptatem nam vero minima eligendi aut earum velit repellendus, aliquam ut et recusandae, quos beatae corrupti distinctio illum totam harum impedit nulla qui aspernatur! Nesciunt, laborum? Ab, numquam consectetur voluptates odit aperiam repellendus recusandae alias optio adipisci enim corrupti molestias temporibus atque nisi nemo dolores quisquam beatae nihil quis voluptatibus necessitatibus voluptate voluptatum dignissimos. 
    
    Libero magnam voluptatibus, modi necessitatibus corporis iure enim sequi. 
    
    Dolores enim aliquid ullam voluptas atque hic cumque corporis sequi aperiam deleniti? Ea aut quis sequi, deleniti minima dolores aspernatur fuga reprehenderit repellendus ut. 
    
    Maiores, illum id exercitationem mollitia amet nemo voluptate, est deserunt, consequatur placeat labore cumque fugiat molestias voluptatem asperiores nisi corrupti magni? Ipsa laborum sit aspernatur dolores sint at quas voluptas quae, quis consequuntur reprehenderit obcaecati, nemo delectus? Distinctio aliquid quibusdam sequi reiciendis impedit dolorum earum dolores totam. 
    
    Unde corporis temporibus, ab sapiente inventore, provident vel repudiandae, vitae incidunt perspiciatis dolorum delectus saepe.
  `
}
