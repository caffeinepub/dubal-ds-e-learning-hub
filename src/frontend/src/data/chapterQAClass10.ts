// Chapter-wise Q&A for Class 10 — minimum 20 questions per chapter
// Subjects: English (First Flight), Mathematics, Science, Hindi (Kshitij-2), SST

export interface ChapterQA {
  subject: string;
  chapter: string;
  questions: { q: string; a: string }[];
}

export const CHAPTER_QA_CLASS10: ChapterQA[] = [
  // ── English: First Flight ─────────────────────────────────────────────────
  {
    subject: "English",
    chapter: "A Letter to God",
    questions: [
      {
        q: "Who wrote the story 'A Letter to God'?",
        a: "The story was written by G.L. Fuentes, a Mexican author.",
      },
      {
        q: "Who is the main character in 'A Letter to God'?",
        a: "Lencho is the main character — a poor farmer who lives in a valley near a river.",
      },
      {
        q: "What destroyed Lencho's crop?",
        a: "A hailstorm destroyed Lencho's entire crop. The hailstones were described as 'large frozen pearls'.",
      },
      {
        q: "Why did Lencho write a letter to God?",
        a: "Lencho had unshakeable faith in God. After his crop was destroyed, he wrote to God asking for 100 pesos to resow his field and survive until the next harvest.",
      },
      {
        q: "How did the postmaster react when he received Lencho's letter?",
        a: "The postmaster laughed at first, but then he was moved by Lencho's faith. He decided to collect money from his employees and friends to send to Lencho so as not to shake his faith in God.",
      },
      {
        q: "How much money did Lencho ask for in his letter?",
        a: "Lencho asked God for 100 pesos to sow his field and live while the crop grew.",
      },
      {
        q: "How much money did Lencho actually receive?",
        a: "Lencho received only 70 pesos because the postmaster could not collect the full 100 pesos.",
      },
      {
        q: "What was Lencho's reaction when he received less money than asked?",
        a: "Lencho was angry. He believed that post office employees had stolen the remaining 30 pesos. He wrote another letter to God asking him not to send money through the mail, as he felt the post office employees were 'a bunch of crooks'.",
      },
      {
        q: "What is the central theme of 'A Letter to God'?",
        a: "The theme is unshakeable faith in God, dramatic irony, and the contrast between naive belief and human distrust. Lencho trusted God completely but distrusted the very people who helped him.",
      },
      {
        q: "What does the hailstorm symbolise in the story?",
        a: "The hailstorm symbolises the harsh unpredictability of nature and the vulnerability of farmers who depend entirely on rain for their livelihood.",
      },
      {
        q: "What is the irony in 'A Letter to God'?",
        a: "The dramatic irony is that Lencho accused the generous postal employees of theft — the very people who went out of their way to help him and preserve his faith in God.",
      },
      {
        q: "What does Lencho compare the raindrops to?",
        a: "Lencho compared the raindrops to 'new coins' — silver for small drops and gold for large drops.",
      },
      {
        q: "Why could the postmaster not send the full 100 pesos?",
        a: "The postmaster could not collect the full amount. He himself put in part of his salary and asked friends and colleagues to contribute, but the total collected was only 70 pesos.",
      },
      {
        q: "What does the story tell us about the postmaster?",
        a: "The postmaster is a kind, empathetic, and generous man. He is moved by Lencho's faith and goes out of his way to help a stranger, even contributing from his own salary.",
      },
      {
        q: "Where does Lencho live and what does he grow?",
        a: "Lencho lives in a valley surrounded by mountains, in a house on the crest of a hill. He grows corn/maize and other crops.",
      },
      {
        q: "What does 'A Letter to God' say about materialism vs. faith?",
        a: "The story suggests that pure material faith (expecting God to literally send money) can blind a person to human goodness. Lencho's faith is admirable but his inability to trust humans is a limitation.",
      },
      {
        q: "How did Lencho address his second letter to God?",
        a: "Lencho wrote: 'God: Of the money that I asked for, only seventy pesos reached me. Send me the rest, since I need it very much. But don't send it to me through the mail because the post office employees are a bunch of crooks.' He addressed it to God directly.",
      },
      {
        q: "What is the significance of the title 'A Letter to God'?",
        a: "The title highlights the extraordinary nature of Lencho's act — writing a physical letter addressed directly to God. It underscores his childlike, absolute faith that God would personally respond to his request.",
      },
      {
        q: "What lesson can be learnt from this story?",
        a: "Key lessons: (1) Faith can be a powerful source of strength in difficult times; (2) Human kindness exists in abundance but is often unrecognised; (3) One should not judge others without evidence — Lencho wrongly accused innocent helpers.",
      },
      {
        q: "What does the word 'avaricious' mean as used in the story?",
        a: "'Avaricious' means greedy for wealth. Lencho uses it to describe the post office employees whom he wrongly accuses of stealing his money — calling them 'a bunch of crooks'.",
      },
    ],
  },
  {
    subject: "English",
    chapter: "Nelson Mandela Long Walk to Freedom",
    questions: [
      {
        q: "Who is the author of 'Long Walk to Freedom'?",
        a: "Nelson Rolihlahla Mandela, the first Black President of South Africa.",
      },
      {
        q: "What event does the chapter describe?",
        a: "The chapter describes Nelson Mandela's inauguration as the first democratically elected President of South Africa on 10 May 1994.",
      },
      {
        q: "What does Mandela mean by 'twin obligations'?",
        a: "Every man has obligations to his family and also to his people and country. Under apartheid, fulfilling one meant neglecting the other. Mandela chose his country over his family.",
      },
      {
        q: "What is apartheid?",
        a: "Apartheid was a system of racial segregation enforced in South Africa from 1948 to 1994. Black South Africans were denied basic rights, voting rights, and equal opportunities. It was enforced by the white minority government.",
      },
      {
        q: "What was the ANC?",
        a: "The African National Congress (ANC) was the political organisation that led the struggle against apartheid in South Africa. Mandela was its leader. The ANC won the first democratic elections in 1994.",
      },
      {
        q: "How long was Nelson Mandela imprisoned?",
        a: "Nelson Mandela was imprisoned for 27 years — from 1964 to 1990. He spent most of this time on Robben Island.",
      },
      {
        q: "What does Mandela say about the meaning of freedom?",
        a: "Mandela says freedom has two stages: (1) the transitory freedom of a youth — to run, swim, move freely; and (2) the realisation that his freedom was an illusion as long as his people were not free. True freedom means freedom for ALL.",
      },
      {
        q: "What three dignitaries attended Mandela's inauguration?",
        a: "The heads of state, military generals, and dignitaries from many nations attended. Significantly, the very generals of the apartheid army saluted Mandela — their former prisoner.",
      },
      {
        q: "What is the greatest wealth of South Africa, according to Mandela?",
        a: "According to Mandela, the greatest wealth of South Africa is its people — both Black and white. The country has the minerals (gold, diamonds) but the real treasure is the human potential.",
      },
      {
        q: "What does Mandela say about courage?",
        a: "Mandela says that he learned that courage is not the absence of fear but the triumph over it. A brave man is one who conquers his fear and proceeds in spite of it.",
      },
      {
        q: "How does Mandela describe the policy of apartheid?",
        a: "Mandela describes apartheid as a 'blemish of profound injustice', 'a horrific disaster', a system that denied people their basic dignity. He calls the oppressor as much a prisoner of hatred as the oppressed.",
      },
      {
        q: "What does 'inaugurated' mean?",
        a: "'Inaugurated' means formally installed or inducted into office. Mandela was inaugurated as President — a formal ceremony to begin his presidency.",
      },
      {
        q: "Who were the oppressors who later became supporters?",
        a: "The white generals of the apartheid army, police, and government officials who had persecuted Mandela and the ANC, now attended his inauguration and saluted him as their President.",
      },
      {
        q: "What does Mandela believe is the source of hatred?",
        a: "Mandela believes that hatred is learned — no one is born hating another person because of their colour, background, or religion. Hatred is a product of circumstance and choice.",
      },
      {
        q: "What does the chapter say about the depth of the human spirit?",
        a: "Mandela says the depth of the human spirit can rise above even the most inhumane circumstances. His story proves that the human spirit cannot be permanently crushed or destroyed.",
      },
      {
        q: "Why does Mandela say the oppressor is also not free?",
        a: "A person who takes away another's freedom is also a prisoner — of hatred, prejudice, and fear. Apartheid imprisoned both the oppressor and the oppressed. True freedom requires liberating both.",
      },
      {
        q: "What message does Mandela give for the future of South Africa?",
        a: "Mandela vows to work for a free, democratic, non-racial South Africa — where all people live in peace and harmony with equal opportunities. He wants to free all people — both white and Black — from the bondage of fear.",
      },
      {
        q: "What was Mandela's legal name and what does it mean?",
        a: "Mandela's full name is Nelson Rolihlahla Mandela. 'Rolihlahla' means 'pulling the branch of a tree' or colloquially 'troublemaker' in Xhosa. His teacher gave him the English name Nelson.",
      },
      {
        q: "What does the inauguration ceremony represent for South Africa?",
        a: "The inauguration represents the birth of a new, democratic South Africa — the end of apartheid, the transfer of power to the Black majority, and hope for reconciliation and unity between all races.",
      },
      {
        q: "What sacrifice did Mandela make for his country?",
        a: "Mandela sacrificed 27 years of his life in prison. He gave up time with his family, his career as a lawyer, his personal freedom — all to fight for equality and justice for his people.",
      },
    ],
  },
  {
    subject: "English",
    chapter: "Two Stories about Flying",
    questions: [
      {
        q: "What are the two stories in 'Two Stories About Flying'?",
        a: "The two stories are: 1) 'His First Flight' by Liam O'Flaherty — about a young seagull who fears flying; 2) 'Black Aeroplane' by Frederick Forsythe — about a pilot helped by a mysterious plane.",
      },
      {
        q: "Why was the young seagull afraid to fly?",
        a: "The young seagull was afraid to fly because he feared that his wings would not support him. He looked down from the ledge and felt dizzy, convinced he would fall into the ocean if he tried.",
      },
      {
        q: "How did the young seagull's parents try to encourage him?",
        a: "His parents, brothers, and sister called to him, scolded him, begged him, and even threatened to leave him to starve on the ledge — but he still refused to fly.",
      },
      {
        q: "How did the seagull finally learn to fly?",
        a: "His mother tempted him with a piece of fish. When she flew close but not close enough, hunger overcame his fear. He dived for the fish and suddenly found his wings supporting him — instinctively he began to fly.",
      },
      {
        q: "What is the theme of 'His First Flight'?",
        a: "The theme is overcoming fear and self-doubt. The story shows that the first step is always the hardest, but once you take it, instinct guides you. Encouragement and the right motivation can help conquer paralysing fear.",
      },
      {
        q: "Who is the narrator in 'Black Aeroplane'?",
        a: "The narrator is an unnamed pilot flying a Dakota aeroplane from France to England at night.",
      },
      {
        q: "What did the pilot dream about while flying?",
        a: "The pilot dreamed about his holiday — breakfast with his family, sleeping, playing with his children.",
      },
      {
        q: "What dangerous situation did the pilot face?",
        a: "The pilot flew into a massive storm cloud (like a black wall in the night sky). He lost control and visibility; the compass, the radio, and other instruments stopped working. He was lost in the darkness.",
      },
      {
        q: "Who helped the pilot during the storm?",
        a: "A mysterious black aeroplane appeared out of nowhere. The pilot of the black plane waved to him and signalled him to follow. The narrator followed the black plane and eventually came out of the storm safely.",
      },
      {
        q: "What was the mystery at the end of 'Black Aeroplane'?",
        a: "When the narrator landed and asked the control room woman about the other pilot, she said there was no other aircraft in the sky that night. No one could explain who the mysterious pilot was — the mystery remains unsolved.",
      },
      {
        q: "What is the theme of 'Black Aeroplane'?",
        a: "The theme is the presence of mysterious, unexplained forces that help in times of crisis. It explores the unknown, the supernatural, and human reliance on unseen guidance in desperate situations.",
      },
      {
        q: "What does the seagull eat when he finally joins his family on the water?",
        a: "His family scream with delight and offer him food — scraps of dog-fish. He begins to eat hungrily, finally celebrating his first flight.",
      },
      {
        q: "What does 'monstrous' mean in the context of 'Black Aeroplane'?",
        a: "In the story, 'monstrous' describes the massive, threatening storm cloud that the pilot encountered — vast, terrifying, and impossible to fly through safely.",
      },
      {
        q: "Why is the seagull unable to fly initially despite watching his siblings fly?",
        a: "Even though his siblings had all flown and his parents demonstrated flying, the seagull was paralysed by his own fear. Fear is psychological — watching others succeed does not automatically give you the courage to act.",
      },
      {
        q: "What does the green light on the pilot's instruments represent?",
        a: "Inside the storm, all lights failed. When the mysterious black plane appeared and the pilot followed it, the instruments eventually stabilised and he could see the lights of the runway — the green light symbolised safety and rescue.",
      },
      {
        q: "What is the significance of the mother's role in 'His First Flight'?",
        a: "The mother's clever use of food as motivation is key. She does not carry the fish to him; she dangles it just out of reach. This forces the seagull to overcome his fear and act. Parental encouragement, even tough love, can enable a child to achieve the seemingly impossible.",
      },
      {
        q: "What fuel level did the pilot have when he was lost in the storm?",
        a: "The pilot had very little fuel left — enough for only about 10 minutes of flying when he was lost in the storm. This added to the urgency and danger of his situation.",
      },
      {
        q: "How does the seagull feel when he first takes off?",
        a: "He screams with fear as he falls downward. Then he feels the wind blow under his wings, his wings spread naturally, and he glides smoothly — instinct takes over and he begins to soar.",
      },
      {
        q: "What does 'His First Flight' teach about the process of learning?",
        a: "It teaches that learning often requires crossing a threshold of fear. No amount of watching or encouraging will substitute for the act itself. The body/mind has capabilities that only activate when we take the leap.",
      },
      {
        q: "What country was the pilot flying from and to in 'Black Aeroplane'?",
        a: "The pilot was flying from France to England (Paris to England) in a Dakota aeroplane over the English Channel at night.",
      },
    ],
  },
  {
    subject: "English",
    chapter: "From the Diary of Anne Frank",
    questions: [
      {
        q: "Who was Anne Frank?",
        a: "Anne Frank was a Jewish girl born in Germany (1929). She and her family hid from the Nazis in a secret annex in Amsterdam from 1942 to 1944. She kept a diary during this time which became one of the most widely read books in history.",
      },
      {
        q: "Why did Anne Frank keep a diary?",
        a: "Anne felt lonely despite being surrounded by people. She wrote 'Paper is more patient than people.' She had no true friends to confide in, and writing helped her process her fears, hopes, and inner thoughts.",
      },
      {
        q: "What did Anne name her diary?",
        a: "Anne named her diary 'Kitty' and addressed all her entries as letters to 'Dear Kitty'. She treated her diary as her closest confidante.",
      },
      {
        q: "Why did Anne feel lonely?",
        a: "Anne had many acquaintances but no true friend she could trust with her deepest thoughts. She felt she could not confide in anyone around her without being misunderstood or judged.",
      },
      {
        q: "What was Anne Frank's relationship with her teacher, Mr. Keesing?",
        a: "Mr. Keesing was Anne's Maths teacher. He thought she was too talkative in class and punished her by giving her extra writing assignments to do as homework.",
      },
      {
        q: "What essay did Mr. Keesing give Anne as punishment?",
        a: "He assigned her an essay titled 'A Chatterbox' after she could not stop talking in class. He then gave her two more essays on the same theme after she kept talking.",
      },
      {
        q: "How did Anne respond to the essay assignments?",
        a: "Anne wrote a witty essay arguing that talking is a student's trait and that she would try to control it, but perhaps she inherited it from her mother. For the third essay, she wrote a poem about a talking duck and a talking father — which made Mr. Keesing laugh and never punished her again.",
      },
      {
        q: "What does Anne say about paper vs. people?",
        a: "'Paper is more patient than people.' Anne meant that paper listens without judging, interrupting, or gossiping. She could pour her deepest thoughts onto paper safely.",
      },
      {
        q: "Why did Anne begin her diary on her 13th birthday?",
        a: "Anne received a diary as a birthday gift on her 13th birthday (12 June 1942). She was excited to record her experiences and started writing immediately.",
      },
      {
        q: "What was the historical context of Anne Frank's diary?",
        a: "Anne wrote her diary during World War II (1939-1945). She was Jewish and the Nazis were persecuting and killing Jews across Europe (the Holocaust). Her family hid for 2 years before being discovered and sent to concentration camps.",
      },
      {
        q: "What happened to Anne Frank?",
        a: "Anne and her family were discovered in August 1944 and sent to concentration camps. Anne died of typhus in Bergen-Belsen concentration camp in February or March 1945, just weeks before the war ended. She was 15.",
      },
      {
        q: "What does Anne think about writing in a diary?",
        a: "Anne thinks that no one will read her diary or care. Yet she writes because she needs an outlet. She writes as if to a dear friend, to create the record of her inner life that she cannot share with real people around her.",
      },
      {
        q: "What does Anne say about her social life at school?",
        a: "Anne had about 30 acquaintances — people she could talk to — but no real friends. She says a friend must be someone you can confide in completely, and she had not found such a person.",
      },
      {
        q: "What kind of student was Anne Frank?",
        a: "Anne was bright, witty, and talkative. She loved writing and language. She was creative enough to write poems and humorous essays that impressed even her strict teacher.",
      },
      {
        q: "Who published Anne Frank's diary and when?",
        a: "Anne's father Otto Frank — the only family member to survive the war — published her diary in 1947. It was titled 'The Diary of a Young Girl' (Het Achterhuis). It has been translated into 70+ languages.",
      },
      {
        q: "What is the significance of Anne's diary for the world?",
        a: "Anne's diary is a first-hand account of the Holocaust from a child's perspective. It humanises the millions of victims, making history personal. It is a testimony to the human spirit's will to live, dream, and find meaning even in darkness.",
      },
      {
        q: "What did Anne plan to do with her diary after the war?",
        a: "Anne heard a Dutch minister on radio say that diaries and letters from the war should be preserved. She decided to rewrite her diary as a novel after the war, calling it 'Het Achterhuis' (The Secret Annexe).",
      },
      {
        q: "Why is the excerpt from Anne Frank's diary included in the CBSE curriculum?",
        a: "It teaches empathy, history of the Holocaust, the power of writing, and the courage of young people in extreme circumstances. It shows students the importance of expressing one's inner life and the value of friendship and trust.",
      },
      {
        q: "What does Anne mean by 'I don't want to have lived in vain'?",
        a: "Anne hoped her diary and experiences would survive the war and be useful to people. She did not want to have gone through the suffering for nothing — she wanted her life and story to matter to the world.",
      },
      {
        q: "What is the tone of Anne Frank's diary writing?",
        a: "The tone is a mix of humour, sadness, hope, fear, longing, and determination. Anne writes honestly about her feelings — including frustrations, dreams, boredom, and hope for a better world after the war.",
      },
    ],
  },
  {
    subject: "English",
    chapter: "Glimpses of India",
    questions: [
      {
        q: "How many stories are in 'Glimpses of India'?",
        a: "Three stories: (1) A Baker from Goa by Lucio Rodrigues; (2) Coorg by Lokesh Abrol; (3) Tea from Assam by Arup Kumar Datta.",
      },
      {
        q: "What is the Portuguese tradition described in 'A Baker from Goa'?",
        a: "The bread-making tradition — the Goan baker (pader) wakes everyone up early morning with the sound of his bamboo staff on the ground (jhang jhang). He delivers warm bread in a basket. This tradition came from the Portuguese who colonised Goa.",
      },
      {
        q: "What does the baker's bamboo staff symbolise in 'A Baker from Goa'?",
        a: "The bamboo staff's sound (jhang jhang) is the sound of childhood, nostalgia, and the Portuguese heritage of Goa. It symbolises a living cultural tradition that has survived colonial times.",
      },
      {
        q: "Why does the author say 'those people are still there'?",
        a: "The Portuguese have gone, but their bread-making tradition and the bakers remain in Goa. The author means that cultural traditions outlast the people who created them.",
      },
      {
        q: "What is the significance of bread in Goan culture?",
        a: "Bread is essential for every Goan celebration — marriages, engagements, births. No festival or occasion is complete without bread. The baker (pader) is thus an important part of community life.",
      },
      {
        q: "What is 'Coorg' and where is it located?",
        a: "Coorg (also called Kodagu) is a district in Karnataka, South India. It is known for its rainforests, coffee and tea plantations, wildlife, and the martial traditions of the Kodava people.",
      },
      {
        q: "What are the Kodava people known for?",
        a: "The Kodava people are known for their martial spirit. They are one of the only communities in India allowed to carry firearms without a licence. They have a tradition of military service.",
      },
      {
        q: "What natural features make Coorg special?",
        a: "Coorg has dense evergreen rainforests, coffee and spice plantations, the river Cauvery originating there, migratory birds, elephants, exotic flora and fauna. It is called 'the Scotland of India'.",
      },
      {
        q: "What is the legend about the origin of the Kodava people?",
        a: "According to legend, the Kodava people are descended from the soldiers of Alexander the Great's army who settled in Coorg. Their traditions and martial nature are said to come from this heritage.",
      },
      {
        q: "What is the story 'Tea from Assam' about?",
        a: "Two friends Rajvir and Pranjol travel to Assam. Rajvir shares the legend of tea — how a Chinese emperor discovered it when tea leaves fell into boiling water. The story describes the vast tea plantations of Assam.",
      },
      {
        q: "What is Assam known for in relation to tea?",
        a: "Assam produces more tea than any other region in the world. The Brahmaputra valley has vast tea estates. The tea plants are dark green, the leaves are small and plucked by women workers.",
      },
      {
        q: "What is the legend of the discovery of tea?",
        a: "Legend 1 (Chinese): Emperor Shen Nung was boiling water when leaves fell in — he liked the taste. Legend 2 (Indian): A monk named Bodhidharma cut off his eyelids so he would not fall asleep during meditation — tea plants grew from where his eyelids fell.",
      },
      {
        q: "What does 'pader' mean?",
        a: "'Pader' is the Konkani/Portuguese word for baker in Goa. The traditional Goan baker who makes and delivers bread.",
      },
      {
        q: "What does the story 'Glimpses of India' teach us?",
        a: "It shows India's rich regional diversity — every region has its own unique food traditions, landscape, history, and culture. India's strength lies in this variety. It also celebrates regional pride.",
      },
      {
        q: "What did Rajvir know about tea that surprised Pranjol?",
        a: "Rajvir knew that over 80 crore cups of tea are drunk every day worldwide, and he shared the two legends about the discovery of tea. Pranjol, though from Assam, was not as knowledgeable about his own region's history.",
      },
      {
        q: "What is 'jhang jhang' and what does it evoke?",
        a: "'Jhang jhang' is the rhythmic sound of the baker's bamboo staff hitting the ground as he walks through Goan streets at dawn. It evokes childhood memories, nostalgia, and the scent of fresh bread.",
      },
      {
        q: "Why do Goan bakers keep a strong physique?",
        a: "The story humorously notes that their physical appearance — the marriage songs are all about the baker — suggests they are well-fed. The author says a thin baker would be surprising in Goa.",
      },
      {
        q: "What does 'Glimpses of India' suggest about tourism in Coorg?",
        a: "Coorg offers natural beauty (waterfalls, forests, birds), cultural experiences (Kodava traditions, martial arts/Kalaripayattu), wildlife, and adventure activities like river rafting. It is an ideal tourist destination.",
      },
      {
        q: "What is the name of the river that originates in Coorg?",
        a: "The river Cauvery (Kaveri) originates in Coorg. It is one of the major rivers of South India.",
      },
      {
        q: "Why is bread-baking still alive in Goa but not in other Indian regions?",
        a: "Because of Goa's long Portuguese colonial history (1510-1961), bread-baking became a deep cultural tradition. The Portuguese love for bread became embedded in Goan food culture and has been maintained by local bakers for generations.",
      },
    ],
  },
  {
    subject: "English",
    chapter: "Mijbil the Otter",
    questions: [
      {
        q: "Who wrote 'Mijbil the Otter'?",
        a: "Gavin Maxwell, a Scottish naturalist and author.",
      },
      {
        q: "Where did the author get the otter?",
        a: "The author received the otter in Basra, Iraq, from the Tigris marshes. He had gone to Iraq to visit a friend and the otter arrived unexpectedly.",
      },
      {
        q: "What species of otter was Mijbil?",
        a: "Mijbil was a Lutrogale perspicillata maxwelli — a species of smooth-coated otter previously unknown to science. It was named 'Maxwell's otter' after the author.",
      },
      {
        q: "How did Mijbil travel from Basra to London?",
        a: "Mijbil was transported in a box in the aircraft. During the flight, he escaped from the box, causing panic among passengers. The author found him under a seat and put him inside his shirt for the rest of the flight.",
      },
      {
        q: "How did people in London react to seeing Mijbil?",
        a: "People were very curious and amused. A street sweeper identified Mijbil as 'a miniature blood 'ound' (miniature bloodhound). Others guessed wildly — squirrel, beaver, etc. The otter was a novelty.",
      },
      {
        q: "What games did Mijbil invent for himself?",
        a: "Mijbil invented several self-created games: rolling a rubber ball around the bath, playing with marbles (rolling them against the skirting board), and hitting a ping-pong ball with his paw.",
      },
      {
        q: "How did Mijbil behave with water?",
        a: "Mijbil loved water intensely. He played in the bath for hours, spent time in the tub, and later in a flat would travel the same route to the water. Water was central to his play and happiness.",
      },
      {
        q: "What does the author mean when he says Mijbil had 'an otter-box'?",
        a: "Mijbil had his own 'otter-box' — a square wooden box packed with cotton wool and his personal belongings (toys, etc.) that he travelled in. The otter was very possessive of it.",
      },
      {
        q: "Why did the airline company refuse to take the otter?",
        a: "The airline initially refused because they had no regulations for carrying otters. The author had to argue and negotiate to have Mijbil allowed on board.",
      },
      {
        q: "What does the story tell us about the bond between humans and animals?",
        a: "The story shows that animals can form deep emotional bonds with humans. Mijbil developed a devoted relationship with the author — following him everywhere, playing games with him, and becoming a companion.",
      },
      {
        q: "What is the theme of 'Mijbil the Otter'?",
        a: "The theme is the joy of unexpected companionship, the intelligence and playfulness of animals, and the human capacity for wonder and connection with the natural world.",
      },
      {
        q: "What happened when the otter escaped on the plane?",
        a: "Mij escaped from the box and ran wildly up and down the aircraft. Passengers screamed. A woman put her feet up on her seat. The airline staff was alarmed. Eventually the author crawled under seats and retrieved Mij and tucked him inside his shirt.",
      },
      {
        q: "How did Mijbil establish a routine in London?",
        a: "Mijbil established a fixed route from the author's flat to the park — even dribbling a ball along the pavement like a football player. He would break away from the lead and follow this exact route every day.",
      },
      {
        q: "What does 'lithe' mean?",
        a: "'Lithe' means thin, supple, and graceful in movement. The author uses it to describe the smooth, fluid movement of the otter.",
      },
      {
        q: "How was Mij different from a dog?",
        a: "Unlike dogs, Mij was untrained and independent. He was not naturally obedient and needed time to form trust. He also had specific quirks — like invented games and a precise daily route — that showed individual personality.",
      },
      {
        q: "What did the author do with Mijbil's species information?",
        a: "The author sent specimens to a London zoo and to experts. The otter was identified as a new species and officially named 'Maxwell's otter' — a significant zoological discovery.",
      },
      {
        q: "How did Mij react to the author's flat?",
        a: "Mij explored every inch of the flat, investigating all objects. He was curious and mischievous. He rearranged things and created his own play areas.",
      },
      {
        q: "What does 'fastidious' mean as used in the story?",
        a: "'Fastidious' means very particular, careful, or demanding. The author uses it to describe how the otter was very particular about cleanliness and about certain habits.",
      },
      {
        q: "What does the story say about otters' intelligence?",
        a: "Otters are shown to be highly intelligent — Mij invented his own games, established complex routines, and showed problem-solving ability (like figuring out how to open taps and work latches).",
      },
      {
        q: "What is the significance of Mij being named a new species?",
        a: "It shows that the natural world still holds undiscovered species. Gavin Maxwell's journey to Iraq led to a zoological discovery — reminding us of the richness of biodiversity and how much remains unknown.",
      },
    ],
  },
  {
    subject: "English",
    chapter: "Madam Rides the Bus",
    questions: [
      {
        q: "Who is the main character in 'Madam Rides the Bus'?",
        a: "Valliammai (called Valli) — an eight-year-old girl who lives in a small village in Tamil Nadu.",
      },
      {
        q: "What was Valli's greatest wish?",
        a: "Valli wanted to ride the bus that passed by her house. She was fascinated by the bus and its passengers and dreamed of taking a ride on it.",
      },
      {
        q: "How did Valli plan and prepare for her bus journey?",
        a: "Valli carefully saved money by avoiding temptations (toys, sweets, snacks). She observed the bus routine, noted the timings and fare, and planned the round trip (bus to town and back) to fit within the time her mother slept in the afternoon.",
      },
      {
        q: "How much did Valli's bus journey cost?",
        a: "The one-way fare was 30 paise. She needed 60 paise for the round trip. She saved this amount carefully over a long time.",
      },
      {
        q: "Who did Valli observe while planning her trip?",
        a: "Valli listened to conversations between adults about the bus route, timing, and fare. She gathered information over many days by asking careful questions.",
      },
      {
        q: "What made Valli laugh during the journey?",
        a: "A young cow — frightened by the bus horn — ran in front of the bus with its tail in the air, looking extremely funny. Valli laughed at the sight.",
      },
      {
        q: "How did Valli behave on the bus?",
        a: "Valli was brave and composed. She sat in the front row, paid her own fare, refused a free seat and elderly woman's offer of a seat, and observed everything with great curiosity and confidence.",
      },
      {
        q: "What happened to the cow on Valli's return journey?",
        a: "The same young cow that had run playfully before the bus now lay dead on the road — it had been hit by a vehicle. Valli felt deeply sad seeing this.",
      },
      {
        q: "What does the dead cow symbolise?",
        a: "The dead cow symbolises the transition from innocence to awareness — the realisation that life is fragile and joy is transient. It marks the end of Valli's carefree innocence.",
      },
      {
        q: "What is the theme of 'Madam Rides the Bus'?",
        a: "Themes include: the spirit of adventure and independence in children, the transience of joy, the harsh realities of life contrasted with childhood innocence, and growing up.",
      },
      {
        q: "Why does Valli feel sad at the end?",
        a: "Valli saw the dead cow and was reminded of how the same cow had been full of life earlier. The joy of the trip was overshadowed by the sadness of death and the fragility of life.",
      },
      {
        q: "Why is Valli called 'Madam' by the bus conductor?",
        a: "The conductor is amused and charmed by the confident, composed, and independent little girl. He affectionately calls her 'Madam' as a sign of respect for her unusually grown-up behaviour.",
      },
      {
        q: "Did Valli tell her mother about her adventure?",
        a: "No. When her mother asked what she was smiling about at the end, Valli just said 'nothing' and kept the whole adventure secret. She felt she now knew a secret her mother did not.",
      },
      {
        q: "What does Valli's adventure say about children's independence?",
        a: "It shows that children, even at a young age, can plan, save, and execute an independent action. Valli's adventure reflects a universal desire for independence and exploration.",
      },
      {
        q: "What is the setting of 'Madam Rides the Bus'?",
        a: "A small village in Tamil Nadu, India. The bus route runs from the village to the town, about 10 km away.",
      },
      {
        q: "What temptations did Valli resist to save money for her trip?",
        a: "Valli resisted buying balloons, toys at the fair, and peppermints from the sweet stall. She was disciplined and focused on her goal.",
      },
      {
        q: "Why did Valli refuse to look out the window on the return trip?",
        a: "After seeing the dead cow, she did not want to look at the road any more. The sight had disturbed her deeply, and the joyful journey home was now tinged with sadness.",
      },
      {
        q: "What does the title 'Madam Rides the Bus' suggest?",
        a: "The title is ironic and affectionate — 'Madam' is an adult term used for a little girl. It highlights the gap between Valli's young age and her mature, independent behaviour.",
      },
      {
        q: "What was Valli's feeling when the bus finally started moving?",
        a: "Valli was overwhelmed with excitement and happiness. She pressed her nose against the glass and stared at everything with wide eyes — the canal, the mountains, the sky, the fields.",
      },
      {
        q: "What lesson does the story teach about life?",
        a: "Life is unpredictable and fragile. A moment of joy can be followed by sadness. Growing up means encountering death and loss. The story gently initiates Valli into the adult awareness of life's impermanence.",
      },
    ],
  },
  {
    subject: "English",
    chapter: "The Sermon at Benares",
    questions: [
      {
        q: "Who is the central figure in 'The Sermon at Benares'?",
        a: "Gautama Buddha (Siddhartha Gautama), the founder of Buddhism, who delivered his first sermon at Benares (Varanasi).",
      },
      {
        q: "What was Buddha's early life?",
        a: "Siddhartha Gautama was born a prince in a palace. He was kept shielded from suffering. At 25, he saw an old man, a sick man, a corpse, and a monk — these 'Four Sights' showed him human suffering.",
      },
      {
        q: "Who was Kisa Gotami?",
        a: "Kisa Gotami was a woman who came to the Buddha after her young son died. She was mad with grief and asked the Buddha to bring her son back to life.",
      },
      {
        q: "What did Buddha ask Kisa Gotami to do?",
        a: "Buddha asked her to bring a handful of mustard seeds from a house where no one had ever died — parent, child, servant or cattle.",
      },
      {
        q: "What did Kisa Gotami discover on her search?",
        a: "She visited house after house and found that in every home, someone had died — grandparent, parent, child. She realised that death is universal and no house is exempt from grief.",
      },
      {
        q: "What did Kisa Gotami do after her realisation?",
        a: "She buried her son in the forest and returned to the Buddha. She took refuge in him as a student. The Buddha taught her the nature of grief and impermanence.",
      },
      {
        q: "What was the Buddha's teaching about grief?",
        a: "Grief is natural but should not consume us. The grieving person is like someone searching for an absent person among the living — seeking what cannot be found. The wise do not grieve because they know the law of impermanence.",
      },
      {
        q: "What is the 'arrow' mentioned in the sermon?",
        a: "The 'arrow' is a metaphor for grief. The Buddha says those who have 'drawn the arrow' (removed grief from their hearts) find peace and overcome sorrow. The wise person 'pulls out the arrow' of lamentation.",
      },
      {
        q: "What is the central message of 'The Sermon at Benares'?",
        a: "Death is universal and inevitable. Grief is natural, but one must not be overwhelmed by it. The path to peace is acceptance of impermanence and withdrawing into the 'undying' (the spiritual path).",
      },
      {
        q: "What does the story tell us about the nature of grief?",
        a: "Grief is universal — every family experiences loss. The sermon teaches that suffering comes from attachment and the false belief that our loved ones are permanent. Accepting mortality leads to peace.",
      },
      {
        q: "Why did the Buddha become an ascetic?",
        a: "After seeing suffering in the world (old age, sickness, death), Prince Siddhartha left his palace, wife, and child to seek the truth about suffering. He lived as an ascetic — wandering, meditating — for seven years before attaining enlightenment under the Bodhi tree.",
      },
      {
        q: "What is the significance of Benares (Varanasi) in the story?",
        a: "Benares is one of the holiest cities in India — on the banks of the Ganges. The Buddha chose this sacred city to deliver his first sermon after enlightenment, symbolising the beginning of his teaching mission.",
      },
      {
        q: "What is the lesson for students from Kisa Gotami's story?",
        a: "The lesson is: sorrow and loss are part of life. Instead of denying or fighting against it, accept it. Find peace by understanding that all life is impermanent. Wisdom comes from this acceptance.",
      },
      {
        q: "What tree did Siddhartha sit under to attain enlightenment?",
        a: "Siddhartha sat under the Bodhi tree (a sacred fig tree) in Bodh Gaya, Bihar, and attained enlightenment after meditating for 49 days. He became the Buddha — the 'Awakened One'.",
      },
      {
        q: "How did the Bodhi tree come to symbolise wisdom?",
        a: "Because Siddhartha attained enlightenment sitting under it. The word 'Bodhi' means 'awakening/enlightenment' in Sanskrit. The tree thus became a symbol of wisdom and spiritual awakening.",
      },
      {
        q: "What does 'undying' mean in the sermon?",
        a: "The Buddha referred to the spiritual realm — the state of Nirvana, liberation from the cycle of birth and death. 'Undying' means the eternal spiritual truth that transcends physical death.",
      },
      {
        q: "What is the moral of using the mustard seed story as a teaching device?",
        a: "Instead of simply telling Kisa Gotami that people die, the Buddha made her discover the truth herself through experience. This made the lesson more powerful and personal. It is a compassionate teaching method.",
      },
      {
        q: "What does the phrase 'He who has drawn the arrow' mean?",
        a: "It refers to someone who has removed grief (the arrow) from their heart. Such a person finds peace and calmness — they no longer suffer excessively from loss because they have accepted the reality of death.",
      },
      {
        q: "Why is this story included in the CBSE English curriculum?",
        a: "It teaches universal values: acceptance of loss, the importance of wisdom in dealing with grief, and compassionate counselling. It also introduces students to Buddhist philosophy and Indian heritage.",
      },
      {
        q: "What is the difference between the Buddha's compassion and a miracle cure?",
        a: "The Buddha did not offer a miracle — he did not bring the child back. Instead, he gave Kisa Gotami a journey of self-discovery that led to wisdom and peace. True compassion is giving someone the tools to understand and overcome suffering.",
      },
    ],
  },
  {
    subject: "English",
    chapter: "The Proposal (Footprints Without Feet)",
    questions: [
      {
        q: "Who wrote 'The Proposal'?",
        a: "Anton Chekhov, the famous Russian playwright and short story writer.",
      },
      {
        q: "Who are the main characters in 'The Proposal'?",
        a: "Ivan Vassilevitch Lomov, Natalya Stepanovna, and her father Stepan Stepanovitch Chubukov.",
      },
      {
        q: "Why does Lomov visit Chubukov?",
        a: "Lomov comes to propose marriage to Chubukov's daughter Natalya. He is 35, has a weak heart, and thinks it is time to settle down.",
      },
      {
        q: "What is the first quarrel about?",
        a: "Lomov and Natalya quarrel over the ownership of Oxen Meadows — a small piece of land. Each claims it belongs to their family.",
      },
      {
        q: "What is the second quarrel about?",
        a: "The second quarrel is about whose dog is better — Lomov's dog Guess or Natalya's dog Squeezer.",
      },
      {
        q: "What is the theme of 'The Proposal'?",
        a: "The play satirises the pettiness of the upper classes — people squabble over trivial things (a meadow, a dog) while ignoring important matters like love and marriage. It is a comedy of errors.",
      },
      {
        q: "How does Natalya react when she hears that Lomov came to propose?",
        a: "She immediately calls him back after driving him away during the quarrel. When told he came to propose, she immediately changes her attitude.",
      },
      {
        q: "What is the role of Chubukov in the play?",
        a: "Chubukov is Natalya's father. He desperately wants his daughter to marry. He greets Lomov warmly but joins in the quarrels too. He ultimately pushes the two together when the quarrels threaten to derail the marriage.",
      },
      {
        q: "What does the play tell us about human nature?",
        a: "Humans are often petty and irrational — quarrelling over small things while missing what is truly important. The play uses humour to show that pride and stubbornness are comic flaws.",
      },
      {
        q: "What is the genre of 'The Proposal'?",
        a: "It is a one-act farce — a type of comedy that uses exaggerated situations, physical humour, and absurd plot developments for comic effect.",
      },
      {
        q: "What happens at the end of 'The Proposal'?",
        a: "Chubukov forcibly places Natalya's hand in Lomov's and declares them engaged. They immediately start quarrelling again about the dogs — the play ends comically with them arguing even as they are betrothed.",
      },
      {
        q: "Why does Lomov keep having palpitations?",
        a: "Lomov has an anxious, hypochondriac nature. He worries excessively about his health — mentioning his palpitations, numb feet, and twitching every time he gets excited or anxious.",
      },
      {
        q: "What does Oxen Meadows represent in the play?",
        a: "Oxen Meadows represents the pettiness of the quarrel — a small, not very valuable piece of land that Lomov himself admits is not worth fighting over, yet the argument escalates absurdly.",
      },
      {
        q: "What is the significance of Lomov's evening dress?",
        a: "Lomov arrives in his formal evening dress to make a good impression — showing the formality and social importance he places on the proposal.",
      },
      {
        q: "What does Chubukov say when he hears the purpose of Lomov's visit?",
        a: "Chubukov is overjoyed — he hugs and kisses Lomov repeatedly, saying he has been hoping for this and calls him a 'darling'. He immediately calls Natalya.",
      },
      {
        q: "Why does Natalya cry after Lomov leaves?",
        a: "Natalya cries because she realises she drove away a man who came to propose to her. She feels angry and upset that the quarrel over Oxen Meadows ruined her chance at marriage.",
      },
      {
        q: "What is the satire in 'The Proposal'?",
        a: "Chekhov satirises the Russian landed gentry — their obsession with property, status, and trivial matters. The proposal — a significant life event — is almost derailed by petty arguments.",
      },
      {
        q: "What does the repetition of quarrels in the play suggest?",
        a: "The repetition suggests that Lomov and Natalya's relationship will always involve quarrelling — they are alike in their stubborn natures. The ending implies the marriage will be argumentative.",
      },
      {
        q: "What does 'farce' mean as a literary term?",
        a: "A farce is a type of comedy characterised by exaggerated situations, physical humour, unlikely plot twists, and characters who behave absurdly. 'The Proposal' is a classic example.",
      },
      {
        q: "What is the author's message in 'The Proposal'?",
        a: "Chekhov gently mocks human vanity and irrationality — showing that people often argue about irrelevant matters and lose sight of what really matters (like companionship and love). The play is humorous but also insightful about human folly.",
      },
    ],
  },

  // ── Mathematics ──────────────────────────────────────────────────────────────
  {
    subject: "Mathematics",
    chapter: "Real Numbers",
    questions: [
      {
        q: "What is Euclid's Division Lemma?",
        a: "For any two positive integers a and b, there exist unique integers q and r such that a = bq + r, where 0 ≤ r < b. This is used to find the HCF (Highest Common Factor) of two numbers.",
      },
      {
        q: "What is the Fundamental Theorem of Arithmetic?",
        a: "Every composite number can be expressed as a product of prime numbers, and this factorisation is unique (except for the order of the factors). Example: 12 = 2 × 2 × 3.",
      },
      {
        q: "What is an irrational number? Give examples.",
        a: "A number that cannot be expressed as p/q (where p and q are integers and q ≠ 0) is irrational. Its decimal expansion is non-terminating and non-repeating. Examples: √2, √3, π, 0.101001000...",
      },
      {
        q: "Prove that √2 is irrational.",
        a: "Assume √2 = p/q (in lowest terms). Then 2 = p²/q², so p² = 2q². This means p² is even, so p is even. Let p = 2m. Then 4m² = 2q², so q² = 2m², meaning q is also even. But then p and q have common factor 2 — contradicting that p/q is in lowest terms. So √2 is irrational.",
      },
      {
        q: "What is a rational number?",
        a: "A rational number is any number that can be expressed in the form p/q where p and q are integers and q ≠ 0. Its decimal expansion is either terminating or non-terminating recurring. Examples: 1/2 = 0.5 (terminating), 1/3 = 0.333... (recurring).",
      },
      {
        q: "When does a rational number p/q (in lowest terms) have a terminating decimal expansion?",
        a: "A rational number p/q (where HCF(p,q) = 1) has a terminating decimal if and only if q has no prime factors other than 2 and 5. Example: 7/40 = 7/(2³×5) terminates; 1/7 does not.",
      },
      {
        q: "State Euclid's Division Algorithm.",
        a: "To find HCF of two positive integers a and b (a > b): Step 1: Apply division lemma — a = bq₁ + r₁; Step 2: If r₁ ≠ 0, apply again: b = r₁q₂ + r₂; Step 3: Continue until remainder = 0. The last non-zero remainder is the HCF.",
      },
      {
        q: "Find the HCF of 135 and 225 using Euclid's Algorithm.",
        a: "225 = 135 × 1 + 90; 135 = 90 × 1 + 45; 90 = 45 × 2 + 0. Since remainder = 0, HCF(135, 225) = 45.",
      },
      {
        q: "What is the relationship between HCF and LCM?",
        a: "For any two positive integers a and b: HCF(a,b) × LCM(a,b) = a × b. This helps find LCM when HCF is known and vice versa.",
      },
      {
        q: "What is a prime number?",
        a: "A prime number is a natural number greater than 1 that has exactly two factors: 1 and itself. Examples: 2, 3, 5, 7, 11, 13... (Note: 2 is the only even prime number).",
      },
      {
        q: "What is the prime factorisation of 120?",
        a: "120 = 2 × 60 = 2 × 2 × 30 = 2 × 2 × 2 × 15 = 2 × 2 × 2 × 3 × 5 = 2³ × 3 × 5.",
      },
      {
        q: "How do you find HCF and LCM using prime factorisation?",
        a: "HCF = product of common prime factors with their lowest powers. LCM = product of all prime factors with their highest powers. Example: 12 = 2²×3, 18 = 2×3². HCF = 2×3 = 6. LCM = 2²×3² = 36.",
      },
      {
        q: "Prove that 3 + 2√5 is irrational.",
        a: "Assume 3 + 2√5 is rational = r. Then 2√5 = r - 3, so √5 = (r-3)/2. Since r is rational, (r-3)/2 is rational. But √5 is irrational — contradiction. Therefore 3 + 2√5 is irrational.",
      },
      {
        q: "What does 'co-prime' mean?",
        a: "Two numbers are co-prime (or relatively prime) if their HCF is 1 — they share no common factors other than 1. Example: 8 and 15 are co-prime (HCF = 1).",
      },
      {
        q: "Can a composite number ever be expressed in more than one way as a product of primes?",
        a: "No. The Fundamental Theorem of Arithmetic guarantees that the prime factorisation is unique. The primes may be arranged in different orders, but the set of prime factors (with multiplicity) is always the same.",
      },
      {
        q: "What is the decimal expansion of 1/7?",
        a: "1/7 = 0.142857142857... = 0.̄142857 — a non-terminating, recurring decimal. Since 7 is not of the form 2ⁿ × 5ᵐ, it cannot be a terminating decimal.",
      },
      {
        q: "If HCF(306, 657) = 9, find LCM(306, 657).",
        a: "LCM = (306 × 657) / HCF = (306 × 657) / 9 = 34 × 657 = 22,338.",
      },
      {
        q: "Is the sum of two irrational numbers always irrational?",
        a: "Not always. Example: √3 + (-√3) = 0 (rational). But √2 + √3 is irrational. The sum is irrational in general unless specific cancellations occur.",
      },
      {
        q: "What is the significance of Real Numbers in Class 10?",
        a: "Real Numbers chapter establishes that the number line is complete — it contains all rational and irrational numbers. It provides the foundation for understanding number systems, proving irrationality, and algorithm-based problem solving.",
      },
      {
        q: "Find the LCM of 12, 15 and 21.",
        a: "12 = 2²×3; 15 = 3×5; 21 = 3×7. LCM = 2²×3×5×7 = 4×3×5×7 = 420.",
      },
    ],
  },
  {
    subject: "Mathematics",
    chapter: "Polynomials",
    questions: [
      {
        q: "What is a polynomial?",
        a: "A polynomial is an expression with one or more terms in which variables have whole number exponents. Example: 3x² + 2x - 5 is a polynomial in x. Key: no negative or fractional exponents.",
      },
      {
        q: "What is the degree of a polynomial?",
        a: "The degree is the highest power of the variable in the polynomial. Example: 3x⁴ - 2x² + 1 has degree 4. A constant (like 5) has degree 0. A zero polynomial has no degree.",
      },
      {
        q: "What are the types of polynomials by degree?",
        a: "Degree 0: constant (e.g., 5). Degree 1: linear (e.g., 2x+3). Degree 2: quadratic (e.g., x²-3x+2). Degree 3: cubic (e.g., x³-2x). Degree 4: biquadratic.",
      },
      {
        q: "What is the geometrical meaning of zeros of a polynomial?",
        a: "The zeros of a polynomial p(x) are the x-coordinates of the points where the graph of y = p(x) intersects the x-axis. A quadratic polynomial can intersect the x-axis at 0, 1, or 2 points.",
      },
      {
        q: "State the relationship between zeros and coefficients for a quadratic polynomial ax² + bx + c.",
        a: "If α and β are zeros: Sum of zeros = α + β = -b/a. Product of zeros = αβ = c/a. These are called Vieta's formulas.",
      },
      {
        q: "Find the zeros of the polynomial x² - 3x - 4.",
        a: "Factoring: x² - 3x - 4 = (x-4)(x+1). Zeros are x = 4 and x = -1. Check: Sum = 4+(-1) = 3 = -(-3)/1 ✓; Product = 4×(-1) = -4 = -4/1 ✓.",
      },
      {
        q: "What does the graph of a linear polynomial look like?",
        a: "The graph of a linear polynomial y = ax + b is a straight line. It intersects the x-axis at exactly one point — the zero of the polynomial.",
      },
      {
        q: "How many zeros can a quadratic polynomial have?",
        a: "A quadratic polynomial can have at most 2 zeros. Geometrically: the parabola may intersect the x-axis at 2 points (2 zeros), 1 point (1 repeated zero), or 0 points (no real zeros).",
      },
      {
        q: "What is the relationship between zeros and coefficients for a cubic polynomial ax³ + bx² + cx + d?",
        a: "If α, β, γ are zeros: α+β+γ = -b/a; αβ+βγ+γα = c/a; αβγ = -d/a.",
      },
      {
        q: "What is the division algorithm for polynomials?",
        a: "For polynomials p(x) and g(x) (g(x) ≠ 0): p(x) = g(x)·q(x) + r(x), where degree of r(x) < degree of g(x) or r(x) = 0. This is analogous to Euclid's division for numbers.",
      },
      {
        q: "If the zeros of x² + (a+1)x + b are 2 and -3, find a and b.",
        a: "Sum = 2+(-3) = -1 = -(a+1)/1, so a+1 = 1, a = 0. Product = 2×(-3) = -6 = b/1, so b = -6.",
      },
      {
        q: "What is the graph of a cubic polynomial like?",
        a: "The graph of a cubic polynomial is a curve that may cross the x-axis at 1, 2, or 3 points. It has one turning point at most (one hill or one valley can appear).",
      },
      {
        q: "Form a quadratic polynomial whose zeros are 5 and -2.",
        a: "Sum = 5+(-2) = 3. Product = 5×(-2) = -10. Polynomial: x² - (sum)x + (product) = x² - 3x - 10.",
      },
      {
        q: "What is a 'zero' of a polynomial?",
        a: "A value k is a zero of polynomial p(x) if p(k) = 0. Geometrically, zeros are where the graph crosses the x-axis. Also called 'roots' in the context of equations.",
      },
      {
        q: "On dividing x³ - 3x² + x + 2 by (x-2), what is the remainder?",
        a: "By the Remainder Theorem, remainder = p(2) = 8 - 12 + 2 + 2 = 0. So (x-2) is a factor of the polynomial.",
      },
      {
        q: "What is the Remainder Theorem?",
        a: "When a polynomial p(x) is divided by (x-a), the remainder equals p(a). If p(a) = 0, then (x-a) is a factor of p(x) — this is the Factor Theorem.",
      },
      {
        q: "Find the quadratic polynomial with sum of zeros 0 and product of zeros -1.",
        a: "Polynomial = x² - (sum)x + product = x² - 0x + (-1) = x² - 1 = (x-1)(x+1). Zeros are +1 and -1.",
      },
      {
        q: "Can a polynomial of degree 2 have 3 zeros?",
        a: "No. A polynomial of degree n has at most n zeros. A quadratic (degree 2) has at most 2 zeros. Having more zeros would violate the Fundamental Theorem of Algebra.",
      },
      {
        q: "What does the coefficient of x² tell us about the shape of the parabola?",
        a: "If the coefficient of x² is positive (a > 0), the parabola opens upward (U-shape). If a < 0, the parabola opens downward (n-shape). This determines whether the graph has a minimum or maximum point.",
      },
      {
        q: "If one zero of 2x² - 3x + p is 3, find the other zero and p.",
        a: "Since 3 is a zero: 2(9) - 3(3) + p = 0 → 18 - 9 + p = 0 → p = -9. Sum of zeros = 3/2 → other zero = 3/2 - 3 = -3/2.",
      },
    ],
  },

  // ── Science ───────────────────────────────────────────────────────────────────
  {
    subject: "Science",
    chapter: "Chemical Reactions and Equations",
    questions: [
      {
        q: "What is a chemical reaction?",
        a: "A chemical reaction is a process in which one or more substances (reactants) are converted into new substances (products) with different properties. It involves breaking and forming chemical bonds.",
      },
      {
        q: "What is a chemical equation?",
        a: "A chemical equation is a symbolic representation of a chemical reaction using symbols and formulas. Example: Mg + O₂ → MgO (word: Magnesium + Oxygen → Magnesium Oxide).",
      },
      {
        q: "What is a balanced chemical equation?",
        a: "A balanced equation has equal numbers of atoms of each element on both sides (reactants = products). This obeys the Law of Conservation of Mass. Example: 2Mg + O₂ → 2MgO.",
      },
      {
        q: "State the Law of Conservation of Mass.",
        a: "In a chemical reaction, the total mass of reactants equals the total mass of products. Matter is neither created nor destroyed. First stated by Antoine Lavoisier.",
      },
      {
        q: "What are the types of chemical reactions?",
        a: "1) Combination (A+B→AB); 2) Decomposition (AB→A+B); 3) Displacement (A+BC→AC+B); 4) Double displacement (AB+CD→AD+CB); 5) Oxidation-Reduction (redox reactions).",
      },
      {
        q: "What is a combination reaction? Give an example.",
        a: "Two or more substances combine to form a single product. Example: CaO + H₂O → Ca(OH)₂ (quicklime + water → slaked lime). Slaked lime reacts exothermically — generates heat.",
      },
      {
        q: "What is a decomposition reaction? Give examples.",
        a: "A single compound breaks down into two or more simpler substances. Types: thermal (by heat): 2Pb(NO₃)₂ → 2PbO + 4NO₂ + O₂; electrolytic (by electricity): 2H₂O → 2H₂ + O₂; photochemical (by light): 2AgCl → 2Ag + Cl₂.",
      },
      {
        q: "What is a displacement reaction? Give an example.",
        a: "A more reactive element displaces a less reactive element from its salt solution. Example: Fe + CuSO₄ → FeSO₄ + Cu (iron displaces copper because Fe is more reactive than Cu).",
      },
      {
        q: "What is a double displacement reaction?",
        a: "Two compounds exchange ions to form two new compounds. Example: Na₂SO₄ + BaCl₂ → BaSO₄↓ + 2NaCl. A white precipitate of BaSO₄ forms — this confirms the double displacement.",
      },
      {
        q: "What is oxidation?",
        a: "Oxidation is the gain of oxygen or loss of hydrogen by a substance. Example: 2Cu + O₂ → 2CuO (copper is oxidised — gains oxygen). Also defined as loss of electrons.",
      },
      {
        q: "What is reduction?",
        a: "Reduction is the loss of oxygen or gain of hydrogen. Example: CuO + H₂ → Cu + H₂O (CuO is reduced — loses oxygen). Also defined as gain of electrons.",
      },
      {
        q: "What is a redox reaction?",
        a: "A reaction in which both oxidation and reduction occur simultaneously. The substance that gets oxidised is the reducing agent; the substance that gets reduced is the oxidising agent. Example: ZnO + C → Zn + CO₂ (C is oxidised; ZnO is reduced).",
      },
      {
        q: "What are exothermic reactions?",
        a: "Reactions that release energy (heat) to the surroundings. Example: burning of natural gas: CH₄ + 2O₂ → CO₂ + 2H₂O + heat. Respiration is also an exothermic reaction.",
      },
      {
        q: "What are endothermic reactions?",
        a: "Reactions that absorb energy from the surroundings. Example: decomposition of CaCO₃: CaCO₃ → CaO + CO₂ (requires heat). Photosynthesis is also an endothermic reaction.",
      },
      {
        q: "What observations indicate a chemical reaction is taking place?",
        a: "Observations: (1) change in colour; (2) formation of precipitate (solid); (3) evolution of gas (bubbles); (4) change in temperature (heat produced or absorbed); (5) change in smell. These indicate new substance(s) have formed.",
      },
      {
        q: "Why is corrosion harmful and how can it be prevented?",
        a: "Corrosion (like rusting of iron) weakens structures and wastes material. Iron + oxygen + water → iron oxide (rust): 4Fe + 3O₂ + 6H₂O → 4Fe(OH)₃. Prevention: painting, galvanising (zinc coating), alloying, using anti-rust chemicals.",
      },
      {
        q: "What is rancidity?",
        a: "Rancidity is the spoilage of fat-containing food due to oxidation — food turns sour and smells bad. Example: butter becomes rancid. Prevention: adding antioxidants (BHA/BHT), storing in airtight containers, refrigeration, nitrogen flushing in food packets.",
      },
      {
        q: "What happens when zinc is added to copper sulphate solution?",
        a: "Zn + CuSO₄ → ZnSO₄ + Cu. The blue colour of CuSO₄ fades (because Cu²⁺ is used up) and a reddish-brown deposit of copper appears on the zinc. This is a displacement reaction — zinc is more reactive than copper.",
      },
      {
        q: "What is photosynthesis as a chemical reaction?",
        a: "6CO₂ + 6H₂O + sunlight → C₆H₁₂O₆ + 6O₂. Plants use sunlight to convert carbon dioxide and water into glucose. It is an endothermic reaction (absorbs light energy) and also a reduction reaction (CO₂ is reduced to glucose).",
      },
      {
        q: "What is the symbol for a precipitate and a gas in a chemical equation?",
        a: "A precipitate (insoluble solid formed) is shown with ↓ (downward arrow). A gas evolved is shown with ↑ (upward arrow). Example: Na₂SO₄ + BaCl₂ → BaSO₄↓ + 2NaCl.",
      },
    ],
  },
  {
    subject: "Science",
    chapter: "Acids Bases and Salts",
    questions: [
      {
        q: "What are acids and their properties?",
        a: "Acids are substances that release H⁺ (hydrogen ions) in water. Properties: sour taste, turns blue litmus red, pH < 7, corrodes metals, reacts with bases to form salt and water. Examples: HCl (hydrochloric), H₂SO₄ (sulfuric), CH₃COOH (acetic/vinegar).",
      },
      {
        q: "What are bases and their properties?",
        a: "Bases are substances that release OH⁻ (hydroxide ions) in water. Properties: bitter taste, slippery feel, turns red litmus blue, pH > 7. Bases that dissolve in water are called alkalis. Examples: NaOH (sodium hydroxide), Ca(OH)₂, Mg(OH)₂.",
      },
      {
        q: "What is a neutralisation reaction?",
        a: "Acid + Base → Salt + Water + Heat. Example: HCl + NaOH → NaCl + H₂O. The H⁺ from the acid and OH⁻ from the base combine to form water. The reaction is exothermic.",
      },
      {
        q: "What is a salt?",
        a: "A salt is an ionic compound formed when an acid reacts with a base. Examples: NaCl (common salt, from HCl + NaOH), CaSO₄ (from H₂SO₄ + Ca(OH)₂). Salts may be acidic, basic, or neutral depending on the acid and base used.",
      },
      {
        q: "What is pH and what does it measure?",
        a: "pH is the measure of hydrogen ion concentration in a solution. pH = -log[H⁺]. Scale: 0-14. pH < 7 = acidic; pH = 7 = neutral; pH > 7 = basic/alkaline. Pure water has pH = 7.",
      },
      {
        q: "What is a universal indicator?",
        a: "A mixture of indicators that shows a colour change over the entire pH range. It turns: red/orange in strong acid, yellow/green in weak acid, green at neutral, blue/violet in base. More precise than single indicators like litmus.",
      },
      {
        q: "What are the uses of pH in everyday life?",
        a: "(1) Our body needs pH 7.0-7.8 in blood. (2) Toothpaste is basic (pH > 7) to neutralise acid from bacteria. (3) Soil pH affects agriculture — lime (CaO) is added to reduce acidity. (4) Bees sting is acidic (formic acid) — baking soda neutralises it. (5) Wasp sting is alkaline — vinegar neutralises it.",
      },
      {
        q: "What happens when an acid reacts with a metal?",
        a: "Acid + Metal → Salt + Hydrogen gas. Example: Zn + H₂SO₄ → ZnSO₄ + H₂↑. The hydrogen gas makes a 'pop' sound when a burning splinter is brought near it (confirmatory test for H₂).",
      },
      {
        q: "What happens when acids react with metal carbonates?",
        a: "Acid + Metal Carbonate → Salt + Water + CO₂. Example: Na₂CO₃ + 2HCl → 2NaCl + H₂O + CO₂↑. The CO₂ turns lime water milky — this is the confirmatory test for CO₂.",
      },
      {
        q: "What is the common salt (NaCl) and how is it obtained?",
        a: "Common salt (sodium chloride, NaCl) is obtained from sea water by evaporation, or from rock salt deposits. It is a raw material for making: (1) NaOH (sodium hydroxide); (2) Na₂CO₃ (washing soda); (3) NaHCO₃ (baking soda); (4) Cl₂ gas; (5) HCl.",
      },
      {
        q: "What is the chlor-alkali process?",
        a: "Electrolysis of brine (NaCl solution): 2NaCl + 2H₂O → Cl₂ (anode) + H₂ (cathode) + 2NaOH (solution). All three products are useful: Cl₂ for bleaching/PVC, H₂ for fuel, NaOH for paper/soap/dye industries.",
      },
      {
        q: "What is bleaching powder and how is it made?",
        a: "Bleaching powder (Ca(OCl)Cl) is made by passing chlorine over dry slaked lime: Ca(OH)₂ + Cl₂ → Ca(OCl)Cl + H₂O. Uses: bleaching cotton/linen/paper, disinfecting drinking water, as an oxidising agent in chemical industry.",
      },
      {
        q: "What is baking soda and what are its uses?",
        a: "Baking soda is NaHCO₃ (sodium hydrogen carbonate). Uses: in baking (reacts with acid in dough to produce CO₂, making food fluffy), antacid (neutralises excess HCl in stomach), fire extinguisher (releases CO₂), laundry soda.",
      },
      {
        q: "What is washing soda and how is it made?",
        a: "Washing soda is Na₂CO₃·10H₂O (sodium carbonate decahydrate). Made by heating baking soda: 2NaHCO₃ → Na₂CO₃ + H₂O + CO₂, then recrystallising. Uses: removing permanent hardness of water, glass/soap/detergent manufacture.",
      },
      {
        q: "What is Plaster of Paris and how is it made?",
        a: "Plaster of Paris is CaSO₄·½H₂O (calcium sulphate hemihydrate). Made by heating gypsum (CaSO₄·2H₂O) to 373K: 2CaSO₄·2H₂O → 2CaSO₄·½H₂O + 3H₂O. Uses: setting broken bones, dental casts, making toys, wall plaster. It sets hard when water is added.",
      },
      {
        q: "What is water of crystallisation?",
        a: "The fixed number of water molecules present in one formula unit of a crystalline substance. Example: CuSO₄·5H₂O (blue vitriol, 5 water molecules). When heated, the water is removed and the colour changes: CuSO₄·5H₂O (blue) → CuSO₄ (white, anhydrous).",
      },
      {
        q: "How do you test for CO₂ gas?",
        a: "Pass the gas through limewater (Ca(OH)₂ solution). If CO₂ is present, it reacts: Ca(OH)₂ + CO₂ → CaCO₃ + H₂O. The CaCO₃ is a white precipitate — limewater turns milky. If excess CO₂ is passed, CaCO₃ dissolves: CaCO₃ + CO₂ + H₂O → Ca(HCO₃)₂ (solution becomes clear again).",
      },
      {
        q: "What is a strong acid and a weak acid?",
        a: "Strong acid: completely ionises in water, producing many H⁺ ions. Examples: HCl, H₂SO₄, HNO₃. pH is very low (0-2). Weak acid: partially ionises, producing few H⁺ ions. Examples: CH₃COOH (acetic), H₂CO₃ (carbonic). pH is slightly below 7 (3-6).",
      },
      {
        q: "Why is diluting an acid dangerous?",
        a: "Concentrated acids (especially H₂SO₄) react violently with water, releasing large amounts of heat (exothermic). Always add acid to water — never add water to acid. This prevents splashing of hot acid.",
      },
      {
        q: "What is an indicator?",
        a: "An indicator is a substance that changes colour in acidic or basic conditions, helping identify the nature of a solution. Examples: litmus (natural — from lichens, turns red in acid and blue in base), phenolphthalein (colourless in acid, pink in base), methyl orange (red in acid, yellow in base).",
      },
    ],
  },

  // ── Hindi: Kshitij-2 ─────────────────────────────────────────────────────────
  {
    subject: "Hindi",
    chapter: "Surdas ke Pad",
    questions: [
      {
        q: "सूरदास कौन थे?",
        a: "सूरदास 15वीं-16वीं शताब्दी के महान भक्ति कवि थे। वे जन्म से अंधे थे। वे श्रीकृष्ण के परम भक्त थे और 'भ्रमरगीत', 'सूरसागर' आदि ग्रंथों के रचयिता हैं। वे अष्टछाप के प्रमुख कवि हैं।",
      },
      {
        q: "क्षितिज-2 में सूरदास के किस ग्रंथ से पद लिए गए हैं?",
        a: "क्षितिज-2 में सूरदास के पद 'सूरसागर' से लिए गए हैं। सूरसागर में श्रीकृष्ण की बाल-लीलाओं और भ्रमरगीत का वर्णन है।",
      },
      {
        q: "पहले पद में गोपियाँ किस बात की शिकायत कर रही हैं?",
        a: "पहले पद में गोपियाँ उद्धव से कह रही हैं कि कृष्ण ने उनसे प्रेम नहीं किया। वे कमल के पत्ते की तरह पानी से अलग रहे — कभी प्रेम के रंग में नहीं रंगे।",
      },
      {
        q: "भ्रमरगीत में 'भ्रमर' और 'गोपियाँ' क्या प्रतीक हैं?",
        a: "'भ्रमर' (भौंरा) उद्धव का प्रतीक है जो कृष्ण का ज्ञान-संदेश लेकर आया है। 'गोपियाँ' (मधुमक्खियाँ) भक्ति और प्रेम की प्रतीक हैं। उनका संवाद निर्गुण (ज्ञान) बनाम सगुण (प्रेम) भक्ति की बहस है।",
      },
      {
        q: "गोपियाँ उद्धव के योग संदेश को क्यों अस्वीकार करती हैं?",
        a: "गोपियाँ कहती हैं कि हम प्रेम में डूबी हैं, ज्ञान और योग हमारे लिए नहीं है। वे व्यंग्य करती हैं — 'हम तो मन की बात कृष्ण से कहती थीं, तुम्हारा योग हमारे लिए कड़वी ककड़ी है।'",
      },
      {
        q: "'मन की वृत्ति' से क्या तात्पर्य है?",
        a: "मन की वृत्ति का अर्थ है मन की स्वाभाविक प्रवृत्ति — गोपियों का मन स्वाभाविक रूप से कृष्ण की ओर मुड़ता है। जैसे नदी का जल स्वाभाविक रूप से नीचे की ओर बहता है, वैसे ही उनका मन कृष्ण-प्रेम में बहता है।",
      },
      {
        q: "गोपियाँ उद्धव की तुलना किससे करती हैं?",
        a: "गोपियाँ उद्धव की तुलना उस कमल के पत्ते से करती हैं जो पानी में रहता है पर भीगता नहीं — 'रहिमन पानी राखिए' की तरह। उद्धव कृष्ण के पास रहे पर उनके प्रेम से अछूते रहे।",
      },
      {
        q: "सूरदास की भाषा शैली कैसी है?",
        a: "सूरदास की भाषा ब्रजभाषा है। वे मधुर, कोमल और संगीतात्मक शब्दों का प्रयोग करते हैं। उनके पद गेय हैं। संगीत, लय और ताल का विशेष ध्यान रखा गया है।",
      },
      {
        q: "पाठ में गोपियाँ अपनी स्थिति की तुलना किससे करती हैं?",
        a: "गोपियाँ अपनी स्थिति हारिल (एक पक्षी) की उस लकड़ी से करती हैं जिसे वह हमेशा पंजे में पकड़े रहता है। वे कहती हैं — कृष्ण का नाम हमारे जीवन की वह लकड़ी है जिसे हम कभी नहीं छोड़ सकते।",
      },
      {
        q: "सूरदास की भक्ति किस प्रकार की है?",
        a: "सूरदास की भक्ति सगुण-साकार, प्रेम-भक्ति है। वे कृष्ण को ईश्वर के रूप में नहीं बल्कि प्रिय, मित्र और स्वामी के रूप में पूजते हैं। यह वात्सल्य और श्रृंगार रस की भक्ति है।",
      },
      {
        q: "पद में 'मन की वृत्ति' का भाव क्या है?",
        a: "गोपियाँ कहती हैं कि उनका मन कृष्ण में इस तरह लग गया है कि उसे किसी और ओर मोड़ना संभव नहीं। जैसे तेल में भीगी हुई सलाई को सीधा करना मुश्किल है।",
      },
      {
        q: "उद्धव कौन हैं?",
        a: "उद्धव श्रीकृष्ण के प्रिय मित्र और भक्त हैं। वे ज्ञानी और निर्गुण ब्रह्म के उपासक हैं। कृष्ण ने उन्हें मथुरा से ब्रज भेजा था गोपियों को ज्ञान और योग का संदेश देने के लिए।",
      },
      {
        q: "'अब हौं नाची बहुत' — इस पंक्ति का भाव क्या है?",
        a: "गोपियाँ कहती हैं — 'हम बहुत नाच चुकी हैं (बहुत कुछ सह चुकी हैं), अब और नहीं। अब कृष्ण का अपमान सहना सहनशक्ति से बाहर है।' यह उनकी पीड़ा और निराशा का भाव है।",
      },
      {
        q: "सूरदास की रचनाओं का क्या महत्व है?",
        a: "सूरदास ने भक्ति आंदोलन में अद्वितीय योगदान दिया। सूरसागर भक्ति काव्य का सर्वश्रेष्ठ ग्रंथ माना जाता है। बाल-कृष्ण की लीलाओं का इतना सुंदर वर्णन किसी अन्य कवि ने नहीं किया।",
      },
      {
        q: "योग-मार्ग और प्रेम-मार्ग में क्या अंतर है (पद के संदर्भ में)?",
        a: "योग-मार्ग (निर्गुण): ज्ञान, ध्यान, इंद्रिय-निग्रह द्वारा निराकार ब्रह्म की उपासना। प्रेम-मार्ग (सगुण): हृदय से साकार ईश्वर से प्रेम। गोपियाँ प्रेम-मार्ग चाहती हैं, उद्धव योग-मार्ग सुझाते हैं।",
      },
      {
        q: "पद में 'कमल नयन' का क्या अर्थ है?",
        a: "'कमल नयन' का अर्थ है कमल के समान सुंदर नेत्रों वाले — यह श्रीकृष्ण का विशेषण है। कमल को सुंदरता और पवित्रता का प्रतीक माना जाता है।",
      },
      {
        q: "सूरदास ने किस भाषा में रचना की?",
        a: "सूरदास ने ब्रजभाषा में रचना की। ब्रजभाषा उत्तर प्रदेश के ब्रज क्षेत्र (मथुरा, वृंदावन) की बोली है। यह अत्यंत मधुर और काव्य के लिए उपयुक्त मानी जाती है।",
      },
      {
        q: "गोपियाँ किस प्रकार का प्रेम चाहती हैं?",
        a: "गोपियाँ निःस्वार्थ, एकनिष्ठ, और समर्पित प्रेम चाहती हैं। वे कहती हैं — हमारा मन-तन-धन सब कृष्ण को समर्पित है। इसके बदले में हम उनका थोड़ा-सा स्नेह चाहती हैं।",
      },
      {
        q: "पाठ में व्यंग्य का उदाहरण कहाँ मिलता है?",
        a: "गोपियाँ उद्धव पर व्यंग्य करती हैं: 'हमारे लिए योग-ज्ञान लाए हो? हम तो उस कड़वी ककड़ी जैसे ज्ञान को नहीं चाहतीं।' यह व्यंग्य बड़े सरल शब्दों में गहरे भाव व्यक्त करता है।",
      },
      {
        q: "सूरदास के काव्य में किन रसों की प्रधानता है?",
        a: "सूरदास के काव्य में वात्सल्य रस (बाल-कृष्ण की लीलाएं), श्रृंगार रस (गोपियों और कृष्ण का प्रेम), और करुण रस (विरह की पीड़ा) की प्रधानता है।",
      },
    ],
  },
  // ── Class 10 Science: Life Processes ─────────────────────────────────────
  {
    subject: "Science",
    chapter: "Life Processes",
    questions: [
      {
        q: "What are life processes?",
        a: "Life processes are the basic functions that maintain life in an organism. They include nutrition, respiration, transportation, excretion, movement, growth, and reproduction.",
      },
      {
        q: "What is autotrophic nutrition?",
        a: "Autotrophic nutrition is the process by which organisms (like plants) make their own food using simple substances. Plants use photosynthesis: 6CO₂ + 6H₂O + light energy → C₆H₁₂O₆ + 6O₂. Chlorophyll is the green pigment that absorbs sunlight.",
      },
      {
        q: "What is heterotrophic nutrition? Give examples.",
        a: "Heterotrophic nutrition is when organisms cannot make their own food and depend on other organisms. Examples: holozoic (humans eating food), parasitic (Cuscuta on a plant), saprophytic (fungi on dead matter).",
      },
      {
        q: "What is the role of saliva in digestion?",
        a: "Saliva is produced by salivary glands. It contains salivary amylase (ptyalin) which breaks down starch into maltose. It also moistens food and helps in swallowing. Digestion of carbohydrates begins in the mouth.",
      },
      {
        q: "What happens in the stomach during digestion?",
        a: "The stomach secretes gastric juice containing: pepsin (digests proteins), hydrochloric acid (HCl — creates acidic medium and kills bacteria), and mucus (protects stomach lining). Pepsin works in the acidic medium (pH 2).",
      },
      {
        q: "What is the role of the small intestine?",
        a: "The small intestine is the main site of digestion and absorption. It receives bile from the liver and pancreatic juice from the pancreas. Intestinal juice completes digestion. Villi and microvilli absorb digested food into the bloodstream.",
      },
      {
        q: "What is bile and where is it produced?",
        a: "Bile is a greenish fluid produced by the liver and stored in the gall bladder. It does not contain enzymes but emulsifies fats (breaks large fat droplets into smaller ones) so that pancreatic lipase can digest them more easily.",
      },
      {
        q: "What is the difference between aerobic and anaerobic respiration?",
        a: "Aerobic: requires oxygen; glucose → CO₂ + water + 38 ATP (maximum energy). Occurs in mitochondria. Anaerobic: no oxygen; in yeast: glucose → ethanol + CO₂ + 2 ATP (fermentation); in muscles: glucose → lactic acid + 2 ATP. Anaerobic releases much less energy.",
      },
      {
        q: "Why do we breathe faster during exercise?",
        a: "During exercise, muscles need more energy (ATP) and oxygen. The body increases breathing rate to supply more O₂ to the blood and remove more CO₂. The heart rate also increases to circulate blood faster.",
      },
      {
        q: "What is the role of alveoli in respiration?",
        a: "Alveoli are tiny air sacs in the lungs with thin walls and rich blood supply. They provide a large surface area for gas exchange: O₂ diffuses from air into blood, CO₂ diffuses from blood into air. Their moist surface facilitates gas exchange.",
      },
      {
        q: "What are the components of blood?",
        a: "Blood consists of: (1) Plasma — yellowish fluid carrying nutrients, hormones, CO₂, waste; (2) RBCs (red blood cells) — carry oxygen using haemoglobin; (3) WBCs (white blood cells) — fight infections; (4) Platelets — help in clotting.",
      },
      {
        q: "What is the double circulation in humans?",
        a: "Blood passes through the heart twice in one complete cycle. Pulmonary circulation: right side of heart → lungs (for oxygenation) → left side. Systemic circulation: left side of heart → body tissues (delivers oxygen) → right side. This prevents mixing of oxygenated and deoxygenated blood.",
      },
      {
        q: "What is the function of the kidneys?",
        a: "The kidneys filter blood to remove waste products (urea, excess salts, water) and form urine. Each kidney has about 1 million nephrons — the filtering units. The nephron filters blood and selectively reabsorbs useful substances; the rest passes out as urine.",
      },
      {
        q: "What is osmoregulation?",
        a: "Osmoregulation is the regulation of water and salt balance in the body. The kidneys play a key role by controlling how much water is reabsorbed from the filtrate. Excess water is excreted as urine; during dehydration, less water is excreted.",
      },
      {
        q: "What is the role of the liver in metabolism?",
        a: "The liver: (1) produces bile for fat digestion; (2) converts excess glucose to glycogen (storage); (3) breaks down old RBCs; (4) detoxifies alcohol and drugs; (5) produces blood proteins; (6) converts excess amino acids to urea (excreted by kidneys).",
      },
      {
        q: "How do plants transport water?",
        a: "Water is absorbed by roots through osmosis. It travels up through xylem vessels due to root pressure and transpiration pull (water lost from leaves creates suction). Xylem is a conducting tissue made of dead cells with lignified walls.",
      },
      {
        q: "What is transpiration?",
        a: "Transpiration is the loss of water vapour through stomata (pores in leaves). It creates a suction force that pulls water up from roots. Transpiration also cools the plant and helps in mineral absorption from soil.",
      },
      {
        q: "What is translocation?",
        a: "Translocation is the movement of food (sucrose and amino acids) from leaves (source) to other parts of the plant (sink — roots, growing regions, fruits) through phloem. Unlike xylem, phloem is made of living cells.",
      },
      {
        q: "What is the significance of haemoglobin?",
        a: "Haemoglobin is the red protein in RBCs that binds to oxygen in the lungs and releases it to tissues. It gives blood its red colour. Each haemoglobin molecule can carry 4 oxygen molecules. Carbon monoxide binds to haemoglobin 200× more strongly than O₂ — making it toxic.",
      },
      {
        q: "What are the excretory products of plants?",
        a: "Plants excrete: CO₂ and water vapour (through stomata during respiration), oxygen (through stomata during photosynthesis), and certain organic wastes stored in leaves, bark, or resins. Plants do not have a specialised excretory system like animals.",
      },
    ],
  },
  // ── Class 10 Science: Electricity ────────────────────────────────────────
  {
    subject: "Science",
    chapter: "Electricity",
    questions: [
      {
        q: "State Ohm's law and write its formula.",
        a: "Ohm's law: The current through a conductor is directly proportional to the potential difference, provided temperature and physical conditions remain constant. V = IR. Here V = voltage (volts), I = current (amperes), R = resistance (ohms).",
      },
      {
        q: "What is resistance? What factors affect it?",
        a: "Resistance is the opposition offered to the flow of electric current. R = ρL/A where ρ = resistivity (material property), L = length (directly proportional), A = cross-sectional area (inversely proportional). Resistance also increases with temperature for metals.",
      },
      {
        q: "What is the difference between series and parallel circuits?",
        a: "Series: same current, voltages add up, total R = R₁ + R₂ (increases). Parallel: same voltage, currents add up, 1/R = 1/R₁ + 1/R₂ (total resistance decreases). Household wiring uses parallel so each device gets full voltage and works independently.",
      },
      {
        q: "What is the SI unit of resistance and who defined it?",
        a: "The SI unit of resistance is Ohm (Ω), named after Georg Simon Ohm. 1 Ω = 1 V/A. If 1 V causes a current of 1 A, the resistance is 1 Ω.",
      },
      {
        q: "What is electric power? Write the formula.",
        a: "Electric power is the rate at which electrical energy is consumed. P = VI = I²R = V²/R. Unit: Watt (W). 1 W = 1 J/s. The unit for electrical energy is kilowatt-hour (kWh): 1 kWh = 3.6 × 10⁶ J.",
      },
      {
        q: "Why are household appliances connected in parallel?",
        a: "(1) Each appliance gets the full supply voltage; (2) If one appliance fails, others continue working; (3) Each can be turned on/off independently; (4) Total current is distributed — the circuit doesn't overload with few devices.",
      },
      {
        q: "What is the function of a fuse in a circuit?",
        a: "A fuse is a safety device made of a thin wire with a low melting point. If current exceeds the safe limit (due to short circuit or overload), the fuse wire heats up and melts, breaking the circuit and preventing damage to appliances and fire.",
      },
      {
        q: "What is Joule's law of heating?",
        a: "Joule's law: Heat produced H = I²Rt, where I = current, R = resistance, t = time. More current → much more heat (I² relationship). Applications: electric heater, iron, toaster, electric bulb (tungsten filament).",
      },
      {
        q: "What are the two types of current? How are they different?",
        a: "DC (Direct Current): current flows in one direction (from battery, solar cell). AC (Alternating Current): current direction reverses periodically (from power stations). India uses AC at 50 Hz, 220V. AC is used for long-distance power transmission (can be stepped up/down with transformers).",
      },
      {
        q: "What is the commercial unit of electrical energy?",
        a: "The commercial unit of electrical energy is kilowatt-hour (kWh), also called a 'unit'. 1 kWh = 1000 W × 3600 s = 3.6 × 10⁶ J. Your electricity bill is calculated in units (kWh).",
      },
      {
        q: "How is the wattage of a bulb determined?",
        a: "Wattage = power consumed per second. A 100W bulb consumes 100 joules per second. In 10 hours: energy = 100 × 10 = 1000 Wh = 1 kWh = 1 unit of electricity. Higher wattage = more energy consumed.",
      },
      {
        q: "What is meant by 1 ampere of current?",
        a: "1 ampere means 1 coulomb of charge flows through a cross-section of the conductor per second. I = Q/t, so if Q = 1 C and t = 1 s, I = 1 A. The charge of one electron is 1.6 × 10⁻¹⁹ C.",
      },
      {
        q: "Explain the concept of potential difference.",
        a: "Potential difference (V) between two points is the work done to move a unit positive charge from one point to the other. V = W/Q (work/charge). Unit: Volt. Measured by voltmeter connected in parallel. It drives current from high potential to low potential.",
      },
      {
        q: "What is resistivity? How does it differ from resistance?",
        a: "Resistivity (ρ) is a property of the material itself — it does not depend on shape or size. R = ρL/A. Unit of ρ: Ω·m. A material with low ρ (like copper) is a good conductor; high ρ (like rubber) is an insulator. Resistance depends on shape; resistivity does not.",
      },
      {
        q: "What is a short circuit and why is it dangerous?",
        a: "A short circuit occurs when the live and neutral wires come in direct contact (resistance → 0), causing a very large current to flow suddenly (by Ohm's law: I = V/R; if R → 0, I → ∞). This generates enormous heat, can burn wires, and cause a fire. A fuse prevents damage.",
      },
    ],
  },
  // ── Class 10 SST: History - Rise of Nationalism in Europe ─────────────────
  {
    subject: "History",
    chapter: "The Rise of Nationalism in Europe",
    questions: [
      {
        q: "What is nationalism? How did it develop in Europe?",
        a: "Nationalism is the belief that people sharing a common history, culture, and language form a nation with the right to self-governance. In 19th century Europe, it developed through revolutions, romantic literature, and the French Revolution's ideals of liberty and equality.",
      },
      {
        q: "What was the significance of the French Revolution for nationalism?",
        a: "The French Revolution (1789) created the idea that a nation is made by its citizens, not by a king. It introduced national symbols (tricolour, anthem), common laws, and the concept of fraternity. Napoleon later spread these ideas across Europe through his conquests.",
      },
      {
        q: "What was the Congress of Vienna (1815) and what were its goals?",
        a: "The Congress of Vienna was a meeting of European powers (Britain, Russia, Prussia, Austria) after Napoleon's defeat. Led by Metternich, its goal was to restore the old monarchies (pre-1789), prevent the spread of revolutionary ideas, and maintain the balance of power in Europe.",
      },
      {
        q: "What were the 'Revolutions of 1830' in Europe?",
        a: "After the conservative restorations of 1815, nationalists and liberals revolted in 1830. Key events: the July Revolution in France, revolts in Belgium (gained independence from Netherlands), Poland, and Italy. Most were crushed, but Belgium's independence was a success.",
      },
      {
        q: "Who were the Romantics and how did they contribute to nationalism?",
        a: "Romantics were 19th-century writers, artists, and philosophers who celebrated emotion, folklore, and national identity over reason. Figures like Grimm Brothers (German folk tales), Herder (German nationalism), and painters created a sense of shared cultural identity.",
      },
      {
        q: "What was the Frankfurt Parliament (1848)?",
        a: "The Frankfurt Parliament was a German liberal assembly that met in 1848 to create a unified German state with a constitutional government. They offered the crown to the Prussian king Friedrich Wilhelm IV, who refused, fearing it would weaken monarchy. The attempt at liberal unification failed.",
      },
      {
        q: "How was Germany unified?",
        a: "Germany was unified in 1871 under Otto von Bismarck, the Prussian Chancellor, through a series of wars: against Denmark (1864), Austria (1866), and France (1870-71). After winning the Franco-Prussian War, Bismarck proclaimed the German Empire at Versailles.",
      },
      {
        q: "How was Italy unified?",
        a: "Italy was unified through the efforts of Mazzini (nationalist ideology), Cavour (political diplomacy, alliance with France against Austria), and Garibaldi (military force — led the 'Red Shirts', captured southern Italy). By 1871, Rome became the capital of unified Italy.",
      },
      {
        q: "Who were the liberals, radicals, and conservatives in early 19th century Europe?",
        a: "Liberals: favoured individual freedoms, constitutional government, but restricted voting to property owners. Radicals: favoured universal male suffrage, women's rights, republic. Conservatives: favoured monarchy, privilege, and tradition; were against change.",
      },
      {
        q: "What was the Zollverein? How did it help German unification?",
        a: "The Zollverein (1834) was a customs union created by Prussia that removed tariff barriers between German states, creating a unified economic market. It tied the German states economically before political unification, weakening Austria's influence and strengthening the case for unity.",
      },
      {
        q: "Who was Giuseppe Mazzini and what was 'Young Italy'?",
        a: "Mazzini was an Italian revolutionary nationalist. He founded 'Young Italy' (1832) — a secret society dedicated to creating a unified, democratic Italian republic. He inspired generations of nationalists across Europe but his revolutionary attempts failed militarily.",
      },
      {
        q: "What were the liberal revolutions of 1848?",
        a: "In 1848, liberal and nationalist revolutions broke out across Europe — France, Germany, Austria-Hungary, and Italy. They demanded constitutional governments and national rights. Most were crushed by conservative armies. However, they showed the power of popular nationalism.",
      },
      {
        q: "What role did women play in nationalist movements in Europe?",
        a: "Women participated actively in nationalist uprisings (barricades, demonstrations, secret societies). However, they were denied political rights — not allowed to vote, hold office, or be full members of nationalist organisations. They were seen as 'symbolic' (Marianne, Germania) but had no legal equality.",
      },
      {
        q: "Why did conservative regimes try to suppress nationalism after 1815?",
        a: "Conservative rulers (like Metternich of Austria) feared that nationalism would destroy multi-ethnic empires (like Austria-Hungary, which had Germans, Czechs, Hungarians, Italians, etc.) and replace monarchies with republics. Nationalism was seen as revolutionary and dangerous to the existing order.",
      },
      {
        q: "What is the significance of the unification of Greece?",
        a: "Greece declared independence from the Ottoman Empire in 1832, becoming the first successful nationalist state in Europe. The Greek War of Independence (1821-29) inspired European liberals and romantics — poets like Lord Byron fought for Greek independence. It showed nationalism could succeed.",
      },
    ],
  },
  // ── Class 10 Economics: Development ──────────────────────────────────────
  {
    subject: "Economics",
    chapter: "Development",
    questions: [
      {
        q: "What is development? Why do different people have different development goals?",
        a: "Development means qualitative improvement in people's lives — income, health, education, freedom, security. Different people have different goals because their needs, priorities, and situations differ. A farmer wants good rainfall; an industrialist wants roads; a daily wage worker wants steady employment. Goals can sometimes conflict.",
      },
      {
        q: "What is per capita income? Why is it not a complete measure of development?",
        a: "Per capita income = total national income ÷ population. It shows the average income but does NOT reflect: distribution of income (inequality), quality of life (health, education), environmental quality, or personal security. Countries with similar per capita income can have very different living standards.",
      },
      {
        q: "What is the Human Development Index (HDI)?",
        a: "HDI is a composite measure developed by UNDP that combines: (1) Per capita income (economic level); (2) Education — adult literacy rate and gross enrolment in schools; (3) Health — life expectancy at birth. Higher HDI = better human development. India's HDI rank is significantly lower than its income rank.",
      },
      {
        q: "What is Infant Mortality Rate (IMR)? Why is it important for development?",
        a: "IMR = number of children who die before reaching age 1, per 1000 live births. It is a key indicator of health services, nutrition, and sanitation. Lower IMR = better health infrastructure. Sri Lanka has much lower IMR than India despite similar income.",
      },
      {
        q: "What is sustainable development?",
        a: "Sustainable development means meeting the needs of the present without compromising the ability of future generations to meet their own needs (Brundtland Commission, 1987). It requires balancing economic growth, social equity, and environmental protection. Overuse of natural resources (deforestation, fossil fuels) is unsustainable.",
      },
      {
        q: "Compare Sri Lanka and India in terms of development indicators.",
        a: "Sri Lanka has: higher per capita income than India, higher literacy rate, lower IMR, higher life expectancy. This shows that a country can achieve high human development even with moderate income if it invests wisely in health and education. Economic growth alone is not sufficient.",
      },
      {
        q: "What is the World Bank criterion for classifying countries?",
        a: "The World Bank classifies countries by GNI per capita: High income (above $12,616 per year), Upper middle income, Lower middle income, Low income (below $1,045). India falls in the lower middle income category. These classifications help determine eligibility for loans and aid.",
      },
      {
        q: "What does 'non-economic factors' of development mean?",
        a: "Non-economic factors include: literacy and education, healthcare access, personal security, political freedom, gender equality, clean environment, and social dignity. Countries with high literacy and healthcare show better development even with lower incomes.",
      },
      {
        q: "Why is literacy important for development?",
        a: "Literate citizens can: secure better employment, understand their rights, participate in democracy, access health information, and train for skilled work. Literacy leads to higher productivity and economic growth, and empowers women and marginalised communities.",
      },
      {
        q: "What is the Net Attendance Ratio?",
        a: "Net Attendance Ratio is the percentage of children in the relevant age group who actually attend school. It measures school attendance rather than just enrollment. High enrollment with low attendance means children are on school rolls but not attending — a common issue in developing countries.",
      },
    ],
  },
];
