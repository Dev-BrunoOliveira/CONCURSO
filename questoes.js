const questoes = {
  // ===================================================
  // MATÉRIA: LÍNGUA PORTUGUESA
  // ===================================================
  portugues: [
    {
      enunciado: "Qual é o plural de 'cidadão'?",
      alternativas: ["Cidadãos", "Cidadões", "Cidões", "Cidadães"],
      correta: 0,
      explicacao: "A regra geral para palavras terminadas em '-ão' é formar o plural em '-ãos'. 'Cidadão' segue essa regra, assim como 'irmão' (irmãos) e 'mão' (mãos)."
    },
    {
      enunciado: "Assinale a alternativa em que a crase foi empregada corretamente:",
      alternativas: [
        "Ele se referiu a mesma pessoa de ontem.",
        "Chegamos à tempo para o início da audiência.",
        "Agradeço à Vossa Excelência pela atenção.",
        "Fui àquela cidade para resolver um problema."
      ],
      correta: 3,
      explicacao: "Usa-se crase antes de pronomes demonstrativos como 'aquele', 'aquela', 'aquilo'. O verbo 'ir' exige a preposição 'a', resultando na fusão: Fui a + aquela = Fui àquela."
    },
    {
      enunciado: "Na frase 'O juiz, homem justo, proferiu a sentença', o termo 'homem justo' exerce a função sintática de:",
      alternativas: ["Aposto", "Vocativo", "Predicativo do sujeito", "Adjunto adnominal"],
      correta: 0,
      explicacao: "Aposto é um termo que se junta a outro de valor substantivo para explicá-lo. 'Homem justo' está explicando quem é 'O juiz'."
    },
    {
      enunciado: "Assinale a alternativa em que a concordância verbal está INCORRETA:",
      alternativas: [
        "Fazem dois anos que não o vejo.",
        "Havia muitos processos na prateleira.",
        "Soou dez horas no relógio da sala.",
        "A maioria dos servidores concordou com a decisão."
      ],
      correta: 2,
      explicacao: "O verbo deve concordar com o sujeito. Em 'Soou dez horas', o sujeito é 'dez horas' (plural). Portanto, o correto é 'Soaram dez horas'."
    },
    {
      enunciado: "Qual das palavras abaixo NÃO é acentuada pela mesma regra de 'judiciário'?",
      alternativas: ["Relatório", "Cartório", "História", "Juízes"],
      correta: 3,
      explicacao: "'Judiciário', 'relatório', 'cartório' e 'história' são paroxítonas terminadas em ditongo. Já 'Juízes' é acentuada pela regra do hiato tônico 'i' em segunda vogal."
    },
    {
      enunciado: "Em 'Ainda que chova, irei ao fórum', a oração sublinhada expressa uma ideia de:",
      alternativas: ["Causa", "Consequência", "Condição", "Concessão"],
      correta: 3,
      explicacao: "A conjunção 'ainda que' introduz uma oração concessiva, que expressa uma ideia oposta à da oração principal, mas que não a impede de acontecer."
    },
    {
      enunciado: "A regência verbal está em DESACORDO com a norma-padrão em:",
      alternativas: [
        "Prefiro estudar a trabalhar.",
        "Aspiro ao cargo de Escrevente Técnico Judiciário.",
        "Obdeço o regulamento do tribunal.",
        "Lembrei-me do prazo para o recurso."
      ],
      correta: 2,
      explicacao: "O verbo 'obedecer' é transitivo indireto e exige a preposição 'a'. O correto é 'Obedeço AO regulamento do tribunal'."
    },
    {
      enunciado: "Assinale a opção em que a pontuação está correta.",
      alternativas: [
        "O servidor que foi aprovado, tomou posse ontem.",
        "Os documentos, que eram essenciais ao processo foram anexados.",
        "São Paulo, 21 de outubro de 2023.",
        "Ele perguntou; onde está o processo?"
      ],
      correta: 2,
      explicacao: "A vírgula é usada para separar o local da data. As outras opções possuem erros de pontuação, como separar sujeito do predicado por vírgula."
    },
    {
      enunciado: "A palavra 'imprescindível' é formada por qual processo?",
      alternativas: ["Derivação sufixal", "Derivação prefixal", "Derivação parassintética", "Derivação prefixal e sufixal"],
      correta: 3,
      explicacao: "A palavra possui um prefixo ('im-') e um sufixo ('-ível') que são adicionados à palavra primitiva 'prescindir'. Como os afixos podem ser adicionados em momentos diferentes, trata-se de derivação prefixal e sufixal."
    },
    {
        enunciado: "No trecho 'O servidor entregou o relatório ao chefe', a substituição dos termos sublinhados por pronomes oblíquos correspondentes resulta em:",
        alternativas: ["entregou-o-lhe", "entregou-lhe-o", "lho entregou", "entregou-o para ele"],
        correta: 1,
        explicacao: "O objeto direto 'o relatório' é substituído por 'o'. O objeto indireto 'ao chefe' é substituído por 'lhe'. A regra de colocação pronominal em verbos terminados em vogal é ênclise (pronome depois do verbo), com o pronome indireto vindo antes do direto: entregou-lhe-o."
    },
    {
        enunciado: "Assinale a alternativa em que o verbo 'haver' está empregado INCORRETAMENTE.",
        alternativas: ["Haverão de existir novas oportunidades.", "Houve por bem o juiz de reconsiderar.", "Há processos complexos neste cartório.", "Não sei se ainda haverá ingressos."],
        correta: 0,
        explicacao: "Na locução verbal 'haver de' + infinitivo, o verbo 'haver' é auxiliar e, portanto, flexiona-se para concordar com o sujeito. O sujeito de 'existir' é 'novas oportunidades' (plural), logo o correto seria 'Hão de existir'. Nas outras opções, 'haver' está correto como verbo principal (sentido de existir) ou auxiliar."
    },
    {
        enunciado: "A colocação do pronome oblíquo átono está em conformidade com a norma-padrão em:",
        alternativas: ["Me informaram sobre o novo prazo.", "O processo que encaminhou-se ao setor já foi analisado.", "Em se tratando de prazos, seja rigoroso.", "Nunca enganei-te, meu amigo."],
        correta: 2,
        explicacao: "A expressão 'Em se tratando de' é uma construção correta com o pronome proclítico (antes do verbo) devido à preposição 'Em'. A alternativa A erra por iniciar a frase com pronome oblíquo. A B erra pois o 'que' atrai o pronome (o que se encaminhou). A D erra pois 'nunca' é palavra atrativa (Nunca te enganei)."
    },
	{
		enunciado: "A concordância nominal está de acordo com a norma-padrão em:",
		alternativas: ["Seguem anexo os documentos solicitados.", "É proibido entrada de estranhos.", "A funcionária ficou meio apreensiva com o prazo.", "Bastante processos foram digitalizados este mês."],
		correta: 2,
		explicacao: "A palavra 'meio', quando advérbio (sentido de 'um pouco'), é invariável. Nas outras: A (anexos), B (É proibida a entrada), D (Bastantes processos)."
	},
	{
		enunciado: "Assinale a alternativa em que a palavra 'que' é um pronome relativo.",
		alternativas: ["Ele disse que o prazo terminaria hoje.", "O processo que analisei era complexo.", "Estude, que a prova será difícil.", "Quase que não consigo chegar a tempo."],
		correta: 1,
		explicacao: "Pronome relativo pode ser substituído por 'o qual' (e suas variações). 'O processo O QUAL analisei era complexo'. Nas outras, 'que' é conjunção integrante (A), conjunção explicativa (C) e partícula de realce (D)."
	},
	{
		enunciado: "A voz passiva analítica está corretamente expressa em:",
		alternativas: ["Analisou-se o documento com atenção.", "Precisa-se de novos servidores.", "A sentença foi proferida pelo juiz.", "Aluga-se esta sala para advogados."],
		correta: 2,
		explicacao: "A voz passiva analítica é formada por 'verbo ser + particípio do verbo principal'. 'A sentença foi proferida' (verbo ser + particípio de proferir). As outras estão na voz passiva sintética (A, D) ou com sujeito indeterminado (B)."
	},
	{
		enunciado: "O uso da vírgula está INCORRETO em:",
		alternativas: ["O diretor do cartório, Dr. João, pediu urgência.", "Ao final do dia, todos os processos foram concluídos.", "Os servidores que trabalham no arquivo, precisam de mais espaço.", "Estudou muito, mas não foi aprovado."],
		correta: 2,
		explicacao: "Não se deve separar o sujeito ('Os servidores que trabalham no arquivo') do seu predicado ('precisam de mais espaço') por vírgula."
	},
	{
		enunciado: "A palavra 'revisão' tem como cognatas, exceto:",
		alternativas: ["ver", "previsão", "antever", "revista"],
		correta: 0,
		explicacao: "Cognatas são palavras da mesma família etimológica (mesmo radical). Revisão, previsão, antever e revista vêm do radical latino 'videre' (ver). A palavra 'ver' é a própria origem, mas na derivação, não é cognata direta de 'revisão'."
	},
	{
		enunciado: "No período 'Ele informou o ocorrido ao seu superior', os termos sublinhados exercem, respectivamente, a função de:",
		alternativas: ["Objeto direto e objeto indireto", "Objeto indireto e objeto direto", "Sujeito e objeto direto", "Objeto direto e complemento nominal"],
		correta: 0,
		explicacao: "O verbo 'informar' é transitivo direto e indireto. Quem informa, informa ALGO (objeto direto: 'o ocorrido') a ALGUÉM (objeto indireto: 'ao seu superior')."
	},
	{
		enunciado: "Qual das frases a seguir apresenta um exemplo de pleonasmo vicioso?",
		alternativas: ["Vi com meus próprios olhos a cena.", "A mim, pouco me importa sua opinião.", "O protagonista principal da história era o herói.", "Subiu para cima para pegar o processo."],
		correta: 3,
		explicacao: "Pleonasmo vicioso é a repetição desnecessária de uma ideia. 'Subir' já carrega a ideia de 'para cima', tornando a expressão redundante e um vício de linguagem."
	},
	{
		enunciado: "A ortografia da palavra está INCORRETA em:",
		alternativas: ["Exceção", "Privilégio", "Ascenção", "Subsídio"],
		correta: 2,
		explicacao: "A forma correta é 'Ascensão', com 's'. As palavras derivadas de verbos terminados em '-ender', '-verter' e '-pelir' geralmente formam substantivos com 's' (ex: ascender -> ascensão)."
	},
	{
		enunciado: "O termo destacado em 'O resultado do concurso era para mim motivo de grande alegria' é classificado como:",
		alternativas: ["Objeto indireto", "Complemento nominal", "Agente da passiva", "Adjunto adnominal"],
		correta: 1,
		explicacao: "O termo 'para mim' completa o sentido do substantivo abstrato 'motivo'. Complemento nominal é o termo preposicionado que completa o sentido de um substantivo, adjetivo ou advérbio."
	},
	{
		enunciado: "Assinale a alternativa com ERRO de concordância nominal.",
		alternativas: ["As certidões seguiram anexas ao ofício.", "Ela mesma protocolou o pedido.", "Havia menas chances de recurso.", "Compramos bastantes materiais para o setor."],
		correta: 2,
		explicacao: "A palavra 'menos' é um advérbio e, portanto, invariável. Não existe a forma 'menas'. O correto é 'menos chances'."
	},
	{
		enunciado: "Em 'É necessário que todos colaborem', a oração subordinada é classificada como:",
		alternativas: ["Substantiva subjetiva", "Substantiva objetiva direta", "Adjetiva restritiva", "Adverbial condicional"],
		correta: 0,
		explicacao: "A oração 'que todos colaborem' exerce a função de sujeito da oração principal. A estrutura 'É + adjetivo + que' geralmente introduz uma oração subordinada substantiva subjetiva (equivale a 'A colaboração de todos é necessária')."
	},
	{
		enunciado: "O verbo destacado foi flexionado corretamente em:",
		alternativas: ["Se ele ver o erro, certamente o corrigirá.", "O juiz interveio na discussão acalorada.", "Quando eu reaver o processo, darei andamento.", "Eles se manteram calados durante a oitiva."],
		correta: 1,
		explicacao: "O verbo 'intervir' é derivado de 'vir', e conjuga-se como ele. No pretérito perfeito, 'ele veio', logo 'ele interveio'. As outras formas corretas seriam: 'vir' (A), 'reouver' (C) e 'mantiveram' (D)."
	},
    {
      enunciado: "A regência do verbo 'implicar' está correta em:",
      alternativas: ["A decisão do juiz implicou na anulação do ato.", "A falta de provas implicará em sua absolvição.", "O descumprimento do acordo implicará sérias consequências.", "A greve implicou com o trânsito da cidade."],
      correta: 2,
      explicacao: "O verbo 'implicar', no sentido de 'acarretar', 'resultar em', é transitivo direto, não exigindo preposição. Portanto, 'implicará sérias consequências' está correto."
    }
  ],

  // ===================================================
  // BLOCO II - DIREITO
  // ===================================================
  direito_penal: [
    {
      enunciado: "O funcionário público que exige, para si ou para outrem, vantagem indevida em razão da função, comete o crime de:",
      alternativas: ["Corrupção passiva", "Concussão", "Peculato", "Prevaricação"],
      correta: 1,
      explicacao: "O verbo chave do crime de Concussão (Art. 316, CP) é 'EXIGIR'. Se o funcionário apenas 'solicitar' ou 'receber', seria Corrupção Passiva."
    },
    {
      enunciado: "No crime de peculato, o sujeito ativo deve ser:",
      alternativas: ["Qualquer pessoa", "Funcionário público", "Apenas o juiz", "A vítima do crime"],
      correta: 1,
      explicacao: "Peculato (Art. 312, CP) é um crime próprio, ou seja, só pode ser cometido por um sujeito ativo qualificado, que neste caso é o funcionário público que tem a posse do bem em razão do cargo."
    },
    {
      enunciado: "Matar alguém, sob o domínio de violenta emoção, logo em seguida a injusta provocação da vítima, configura:",
      alternativas: ["Homicídio simples", "Homicídio qualificado", "Homicídio privilegiado", "Lesão corporal seguida de morte"],
      correta: 2,
      explicacao: "Essa é a definição exata do Homicídio Privilegiado, previsto no Art. 121, § 1º, do Código Penal, que atua como uma causa de diminuição de pena."
    },
    {
      enunciado: "O crime de desacato se consuma quando o particular:",
      alternativas: ["Oferece vantagem indevida a funcionário público para que omita ato de ofício.", "Desobedece a ordem legal de funcionário público.", "Apropria-se de dinheiro de que tem a posse em razão do cargo.", "Ofende funcionário público no exercício da função ou em razão dela."],
      correta: 3,
      explicacao: "Desacato (Art. 331, CP) consiste em ofender ou desrespeitar funcionário público no exercício de sua função ou por causa dela. É um crime contra a administração pública."
    },
    {
      enunciado: "Deixar o funcionário, por indulgência, de responsabilizar subordinado que cometeu infração no exercício do cargo, caracteriza o crime de:",
      alternativas: ["Prevaricação", "Condescendência criminosa", "Corrupção passiva privilegiada", "Advocacia administrativa"],
      correta: 1,
      explicacao: "Essa é a conduta descrita no crime de Condescendência Criminosa (Art. 320, CP). A motivação aqui é a 'indulgência' (tolerância, pena), diferente da Prevaricação, que visa satisfazer interesse ou sentimento pessoal."
    },
    {
      enunciado: "A falsificação de um documento público, como uma carteira de identidade, é tipificada no Código Penal como crime de:",
      alternativas: ["Estelionato", "Falsidade ideológica", "Falsificação de documento público", "Uso de documento falso"],
      correta: 2,
      explicacao: "O crime de Falsificação de Documento Público (Art. 297, CP) consiste em falsificar, no todo ou em parte, documento público, ou alterar documento público verdadeiro. A falsidade ideológica (Art. 299) seria inserir informação falsa em um documento materialmente verdadeiro."
    },
    {
      enunciado: "Agir em estado de necessidade, em legítima defesa, ou em estrito cumprimento de dever legal são causas que:",
      alternativas: ["Excluem a culpabilidade.", "Excluem a ilicitude do fato.", "Atenuam a pena.", "Qualificam o crime."],
      correta: 1,
      explicacao: "Estas são as excludentes de ilicitude previstas no Art. 23 do Código Penal. Quando presentes, o fato continua sendo típico, mas não é ilícito (antijurídico), logo, não há crime."
    },
    {
      enunciado: "Quando, iniciada a execução, o crime não se consuma por circunstâncias alheias à vontade do agente, temos a figura da:",
      alternativas: ["Desistência voluntária", "Tentativa", "Arrependimento eficaz", "Consumação"],
      correta: 1,
      explicacao: "Esta é a definição de Tentativa (Art. 14, II, CP). Na desistência voluntária e no arrependimento eficaz, o agente voluntariamente impede a consumação, o que não ocorre aqui."
    },
    {
        enunciado: "O funcionário público que solicita vantagem indevida, em razão da função, pratica o crime de:",
        alternativas: ["Concussão", "Corrupção passiva", "Peculato", "Corrupção ativa"],
        correta: 1,
        explicacao: "O verbo 'SOLICITAR' caracteriza o crime de Corrupção Passiva (Art. 317, CP). Se o verbo fosse 'exigir', seria Concussão. Corrupção ativa é praticada pelo particular que oferece a vantagem."
    },
    {
        enunciado: "Apropriar-se o funcionário público de dinheiro, valor ou qualquer outro bem móvel, de que tem a posse em razão do cargo, ou desviá-lo, em proveito próprio ou alheio, configura o crime de:",
        alternativas: ["Estelionato", "Apropriação indébita", "Peculato", "Roubo"],
        correta: 2,
        explicacao: "Esta é a exata descrição do crime de Peculato, previsto no Art. 312 do Código Penal. É um crime especial próprio de funcionário público contra a administração em geral."
    },
    {
        enunciado: "Retardar ou deixar de praticar, indevidamente, ato de ofício, para satisfazer interesse pessoal, é a conduta do crime de:",
        alternativas: ["Desacato", "Desobediência", "Corrupção Passiva", "Prevaricação"],
        correta: 3,
        explicacao: "A definição corresponde ao crime de Prevaricação (Art. 319, CP). O elemento subjetivo específico é a 'satisfação de interesse ou sentimento pessoal'."
    },
    {
      enunciado: "O particular que oferece ou promete vantagem indevida a funcionário público, para determiná-lo a praticar, omitir ou retardar ato de ofício, comete o crime de:",
      alternativas: ["Tráfico de influência", "Corrupção ativa", "Corrupção passiva", "Concussão"],
      correta: 1,
      explicacao: "Esta é a definição do crime de Corrupção Ativa (Art. 333, CP), praticado pelo particular contra a administração pública. A Corrupção Passiva é praticada pelo funcionário que solicita ou recebe a vantagem."
    },
    {
      enunciado: "Inserir ou facilitar, o funcionário autorizado, a inserção de dados falsos nos sistemas informatizados da Administração Pública com o fim de obter vantagem indevida para si ou para outrem, configura qual crime?",
      alternativas: ["Peculato mediante erro de outrem", "Inserção de dados falsos em sistema de informações", "Falsidade ideológica", "Estelionato"],
      correta: 1,
      explicacao: "Trata-se do crime específico previsto no Art. 313-A do Código Penal, que visa proteger a segurança e a veracidade dos sistemas de informação da Administração Pública."
    },
    {
      enunciado: "Para os efeitos penais, considera-se funcionário público:",
      alternativas: ["Apenas quem exerce cargo, emprego ou função pública mediante concurso.", "Quem exerce cargo, emprego ou função pública, ainda que transitoriamente ou sem remuneração.", "Apenas os empregados de empresas públicas e sociedades de economia mista.", "Somente quem possui estabilidade no serviço público."],
      correta: 1,
      explicacao: "O Art. 327 do Código Penal adota um conceito amplo de funcionário público para fins penais, abrangendo qualquer pessoa que exerça função pública, mesmo que de forma temporária e sem receber pagamento por isso."
    },
    {
      enunciado: "Opor-se à execução de ato legal, mediante violência ou ameaça a funcionário competente para executá-lo ou a quem lhe esteja prestando auxílio, caracteriza o crime de:",
      alternativas: ["Resistência", "Desobediência", "Desacato", "Coação no curso do processo"],
      correta: 0,
      explicacao: "Essa é a definição do crime de Resistência, previsto no Art. 329 do Código Penal. O elemento chave é o emprego de violência ou grave ameaça para impedir o ato legal."
    },
    {
      enunciado: "Em relação ao tempo do crime, o Código Penal brasileiro adota a teoria da:",
      alternativas: ["Atividade", "Resultado", "Ubiquidade", "Mista"],
      correta: 0,
      explicacao: "O Art. 4º do Código Penal é claro ao adotar a teoria da Atividade, considerando-se praticado o crime no momento da ação ou omissão, ainda que outro seja o momento do resultado."
    },
    {
      enunciado: "Diz-se o crime doloso quando o agente:",
      alternativas: ["Deu causa ao resultado por imprudência, negligência ou imperícia.", "Assumiu o risco de produzir o resultado.", "Quis o resultado ou assumiu o risco de produzi-lo.", "Não quis o resultado, mas agiu com culpa."],
      correta: 2,
      explicacao: "O Art. 18, I, do CP define o crime doloso como aquele em que o agente quis o resultado (dolo direto) ou assumiu o risco de produzi-lo (dolo eventual)."
    },
    {
      enunciado: "Aquele que, de qualquer modo, concorre para o crime incide nas penas a este cominadas, na medida de sua culpabilidade. Este texto refere-se ao:",
      alternativas: ["Concurso de pessoas", "Concurso de crimes", "Erro de tipo", "Crime impossível"],
      correta: 0,
      explicacao: "Este é o conceito de Concurso de Pessoas, previsto no Art. 29 do Código Penal, que trata da participação de duas ou mais pessoas na mesma infração penal."
    },
    {
      enunciado: "Dar às verbas ou rendas públicas aplicação diversa da estabelecida em lei é a conduta do crime de:",
      alternativas: ["Peculato", "Emprego irregular de verbas ou rendas públicas", "Prevaricação", "Concussão"],
      correta: 1,
      explicacao: "Esta é a descrição do crime de Emprego Irregular de Verbas ou Rendas Públicas, tipificado no Art. 315 do Código Penal. Diferente do peculato-desvio, aqui não há a finalidade de apropriação."
    },
    {
      enunciado: "O crime de abandono de função (Art. 323 do CP) só se configura se o fato ocorre:",
      alternativas: ["Fora do lugar onde o funcionário exerce suas atribuições.", "Com o fim de satisfazer interesse ou sentimento pessoal.", "Se do fato resulta prejuízo público.", "Em lugar compreendido na faixa de fronteira."],
      correta: 3,
      explicacao: "O crime de abandono de função tem uma qualificadora específica no § 2º do Art. 323 do CP: se o fato ocorre em lugar compreendido na faixa de fronteira, a pena é maior."
    },
    {
        enunciado: "No crime de excesso de exação, o crime é qualificado se:",
        alternativas: [
            "praticado por funcionário público.",
            "cometido por meio vexatório ou gravoso, que a lei não autoriza.",
            "resulta dano para a Administração Pública ou para o administrado.",
            "o funcionário pratica ato de ofício... cedendo a pedido ou influência de outrem.",
            "o funcionário desvia, em proveito próprio ou de outrem, o que recebeu indevidamente para recolher aos cofres públicos."
        ],
        correta: 4,
        explicacao: "O crime de excesso de exação ocorre quando o funcionário exige tributo que sabe indevido (caput). A forma qualificada (§ 1º do Art. 316) ocorre quando ele 'desvia, em proveito próprio ou de outrem, o que recebeu indevidamente para recolher aos cofres públicos'."
    },
    {
        enunciado: "Aquele que se acusa, perante a autoridade, de crime inexistente, pratica:",
        alternativas: [
            "crime de autoacusação falsa.",
            "crime de fraude processual.",
            "crime de comunicação falsa de crime.",
            "crime de falso testemunho.",
            "não pratica crime algum, pois não há vítima."
        ],
        correta: 0,
        explicacao: "A conduta descrita corresponde exatamente ao tipo penal do Art. 341 do Código Penal: 'Acusar-se, perante a autoridade, de crime inexistente ou praticado por outrem'."
    },
    {
        enunciado: "O crime do artigo 337-A do CP (Sonegação de contribuição previdenciária) tem como uma de suas condutas:",
        alternativas: [
            "Deixar de lançar mensalmente nos títulos próprios da contabilidade da empresa as quantias descontadas dos segurados.",
            "Exigir o pagamento de contribuição social que sabe ou deveria saber indevida.",
            "Omitir o nome do segurado e seus dados pessoais da folha de pagamento.",
            "Apropriar-se de valores destinados à previdência social.",
            "Inserir dados falsos na Guia de Recolhimento do Fundo de Garantia do Tempo de Serviço."
        ],
        correta: 2,
        explicacao: "O Art. 337-A, I, do CP, descreve a conduta de 'suprimir ou reduzir contribuição social previdenciária... mediante as seguintes condutas: I – omitir de folha de pagamento da empresa... segurado empregado, contribuinte individual ou trabalhador avulso que lhe prestem serviços'."
    },
    {
      enunciado: "Considera-se em legítima defesa quem, usando moderadamente dos meios necessários, repele injusta agressão, atual ou iminente, a direito:",
      alternativas: ["apenas próprio.", "apenas de terceiro.", "próprio ou de outrem.", "apenas à vida."],
      correta: 2,
      explicacao: "O Art. 25 do Código Penal define a legítima defesa, estabelecendo que ela pode ser exercida para proteger direito próprio ou de outra pessoa (outrem)."
    },
    {
      enunciado: "A pena é aumentada de um terço no crime de Corrupção Passiva se, em consequência da vantagem ou promessa, o funcionário:",
      alternativas: ["ameaça a vítima.", "exige a vantagem.", "solicita a vantagem com insistência.", "retarda ou omite ato de ofício, ou o pratica infringindo dever funcional."],
      correta: 3,
      explicacao: "Esta é a causa de aumento de pena (majorante) prevista no § 1º do Art. 317 do Código Penal para o crime de Corrupção Passiva."
    }
  ],
  // ===================================================
  // DIREITO PROCESSUAL PENAL
  // ===================================================
  direito_processual_penal: [
    {
      enunciado: "De acordo com o Código de Processo Penal, o inquérito policial deverá terminar no prazo de:",
      alternativas: ["10 dias, se o indiciado estiver preso, ou 30 dias, quando solto.", "15 dias em qualquer situação.", "5 dias, se o indiciado estiver preso, ou 15 dias, quando solto.", "30 dias, independentemente de o indiciado estar preso ou solto."],
      correta: 0,
      explicacao: "O Art. 10 do CPP estabelece o prazo de 10 dias para conclusão do inquérito se o indiciado estiver preso, e de 30 dias, se estiver solto."
    },
    {
      enunciado: "A autoridade policial poderá conceder fiança nos casos de infração cuja pena privativa de liberdade máxima não seja superior a:",
      alternativas: ["2 anos", "4 anos", "8 anos", "1 ano"],
      correta: 1,
      explicacao: "Conforme o Art. 322 do CPP, a autoridade policial somente poderá conceder fiança nos casos de infração cuja pena privativa de liberdade máxima não seja superior a 4 anos."
    },
    {
      enunciado: "Se o réu, citado por edital, não comparecer nem constituir advogado, o que acontecerá com o processo e o prazo prescricional?",
      alternativas: [
        "O processo será extinto e a prescrição continuará correndo.",
        "O processo e o curso do prazo prescricional ficarão suspensos.",
        "O juiz nomeará curador especial e o processo seguirá normalmente.",
        "O réu será considerado revel e o processo seguirá sem sua presença."
      ],
      correta: 1,
      explicacao: "É o que determina o Art. 366 do CPP. Para evitar que o réu seja processado à revelia e que o crime prescreva, o processo e o prazo prescricional são suspensos."
    },
    {
      enunciado: "Considera-se em flagrante delito quem:",
      alternativas: ["É encontrado, logo depois, com instrumentos que façam presumir ser ele autor da infração.", "Foge do local do crime para não ser preso.", "É investigado pela polícia por suspeita de crime.", "Confessa o crime dias após o ocorrido."],
      correta: 0,
      explicacao: "Esta é a hipótese de flagrante presumido, prevista no Art. 302, IV, do CPP. As outras hipóteses são: estar cometendo a infração, acabar de cometê-la, ou ser perseguido logo após em situação que faça presumir ser o autor."
    },
    {
      enunciado: "A ação penal nos crimes de ação pública, em regra, é promovida:",
      alternativas: ["Pelo ofendido, mediante queixa-crime.", "Pelo Ministério Público, por meio de denúncia.", "Pela autoridade policial, por meio de portaria.", "Pelo juiz, de ofício."],
      correta: 1,
      explicacao: "A titularidade da ação penal pública pertence ao Ministério Público (Art. 129, I, CF), que a promove por meio da denúncia. A queixa-crime é a peça inicial da ação penal privada."
    },
    {
      enunciado: "No processo penal, a prova da alegação incumbirá a quem a fizer, sendo facultado ao juiz, de ofício, ordenar a produção antecipada de provas. Esta regra refere-se ao:",
      alternativas: ["Princípio do contraditório", "Princípio da ampla defesa", "Ônus da prova", "Princípio da publicidade"],
      correta: 2,
      explicacao: "O Art. 156 do CPP estabelece a regra do ônus da prova, ou seja, a responsabilidade de provar um fato cabe a quem o alega (acusação prova a culpa, defesa prova álibis, etc.)."
    },
    {
        enunciado: "No âmbito dos Juizados Especiais Criminais (Lei 9.099/95), o acordo homologado pelo juiz mediante o qual o autor do fato aceita uma pena restritiva de direitos ou multa, evitando a instauração do processo, é chamado de:",
        alternativas: ["Suspensão condicional do processo", "Composição dos danos civis", "Transação penal", "Representação"],
        correta: 2,
        explicacao: "A Transação Penal (Art. 76 da Lei 9.099/95) é um acordo oferecido pelo Ministério Público em crimes de menor potencial ofensivo, no qual o investigado aceita cumprir uma pena antecipada para que o processo não seja iniciado."
    },
    {
        enunciado: "O juiz que se julga incompetente para julgar o processo deve:",
        alternativas: ["Arquivar o processo e comunicar as partes.", "Remeter os autos ao juiz que entende ser competente.", "Julgar o processo e anular sua própria decisão.", "Suspender o processo até que o Tribunal decida."],
        correta: 1,
        explicacao: "Reconhecida a incompetência, o juiz deve remeter o processo ao juízo competente, conforme o Art. 109 do CPP, que decidirá sobre a validade dos atos já praticados."
    },
    {
        enunciado: "A citação do militar far-se-á:",
        alternativas: ["Por edital, em qualquer hipótese.", "Por mandado, entregue ao chefe da repartição em que servir.", "Pelo correio, no endereço de sua residência.", "Sempre na pessoa de seu advogado constituído."],
        correta: 1,
        explicacao: "O Art. 358 do CPP estabelece uma regra especial para a citação do militar, que será feita por intermédio do chefe do respectivo serviço, para garantir que o ato chegue ao conhecimento do citando."
    },
    {
      enunciado: "Qual das seguintes provas é considerada ilícita, devendo ser desentranhada do processo?",
      alternativas: ["A confissão do réu obtida mediante tortura.", "O depoimento de uma testemunha que ouviu dizer sobre o crime.", "Um documento juntado fora do prazo legal.", "A perícia realizada por um único perito oficial."],
      correta: 0,
      explicacao: "Provas obtidas com violação a normas constitucionais ou legais são ilícitas (Art. 157 do CPP). A tortura viola a dignidade da pessoa humana, tornando a confissão imprestável."
    },
    {
      enunciado: "O ofendido, ou seu representante legal, decairá no direito de queixa ou de representação, se não o exercer dentro do prazo de:",
      alternativas: ["3 meses, a contar da data do fato.", "1 ano, a contar do conhecimento da autoria.", "6 meses, a contar do dia em que vier a saber quem é o autor do crime.", "30 dias, a contar da data do crime."],
      correta: 2,
      explicacao: "O Art. 38 do CPP estabelece o prazo decadencial de 6 meses para o exercício do direito de queixa (ação penal privada) ou de representação (ação penal pública condicionada), contado do dia em que a vítima sabe quem foi o autor do crime."
    },
    {
      enunciado: "No procedimento do Tribunal do Júri, a decisão de pronúncia significa que o juiz:",
      alternativas: ["Condenou o réu, encerrando o processo.", "Absolveu o réu sumariamente.", "Se convenceu da materialidade do fato e de indícios suficientes de autoria, submetendo o réu a julgamento pelo júri.", "Desclassificou o crime para outro que não é da competência do júri."],
      correta: 2,
      explicacao: "A pronúncia (Art. 413, CPP) é uma decisão interlocutória mista que encerra a primeira fase do rito do júri. Nela, o juiz apenas verifica a presença de prova da materialidade e indícios de autoria, sem fazer um juízo de condenação."
    },
    {
      enunciado: "Qual o recurso cabível contra a decisão que rejeita a denúncia ou a queixa?",
      alternativas: ["Apelação", "Carta Testemunhável", "Habeas Corpus", "Recurso em Sentido Estrito (RESE)"],
      correta: 3,
      explicacao: "O Art. 581, I, do CPP, prevê expressamente o cabimento do Recurso em Sentido Estrito contra a decisão que não receber a denúncia ou a queixa."
    },
    {
      enunciado: "A busca e apreensão domiciliar, para ser executada, necessita de:",
      alternativas: ["Mandado judicial, a qualquer hora do dia ou da noite.", "Autorização verbal da autoridade policial.", "Mandado judicial, a ser cumprido durante o dia, salvo consentimento do morador.", "Apenas a presença de duas testemunhas."],
      correta: 2,
      explicacao: "A Constituição Federal garante a inviolabilidade de domicílio. A busca e apreensão domiciliar só pode ser feita com mandado judicial e, em regra, durante o dia (Art. 245, CPP), a não ser que o morador consinta com a entrada à noite."
    },
    {
      enunciado: "No interrogatório do acusado, é garantido o direito:",
      alternativas: ["De mentir sobre todos os fatos.", "De permanecer em silêncio, sem que isso o prejudique.", "De não ser acompanhado por advogado.", "De acusar terceiros sem apresentar provas."],
      correta: 1,
      explicacao: "O direito ao silêncio é uma garantia constitucional (Art. 5º, LXIII, CF). O acusado tem o direito de não produzir prova contra si mesmo, e seu silêncio não pode ser interpretado em seu desfavor (Art. 186, parágrafo único, CPP)."
    },
    {
      enunciado: "A competência para processar e julgar o crime de latrocínio é:",
      alternativas: ["Do Tribunal do Júri.", "Do Juizado Especial Criminal.", "Do Juiz singular.", "Da Justiça Federal."],
      correta: 2,
      explicacao: "Apesar de haver morte, o latrocínio (roubo seguido de morte) é um crime contra o patrimônio, e não um crime doloso contra a vida. Portanto, a competência é do juiz singular (vara criminal comum), conforme Súmula 603 do STF."
    },
    {
      enunciado: "A Suspensão Condicional do Processo (sursis processual), prevista na Lei 9.099/95, é cabível em crimes cuja pena:",
      alternativas: ["Mínima cominada for igual ou inferior a um ano.", "Máxima não seja superior a dois anos.", "Mínima for igual ou inferior a dois anos.", "Máxima não seja superior a quatro anos."],
      correta: 0,
      explicacao: "O Art. 89 da Lei 9.099/95 permite a suspensão do processo, mediante certas condições, para os crimes em que a pena mínima prevista seja igual ou inferior a 1 (um) ano."
    },
    {
      enunciado: "Em qual das seguintes hipóteses o juiz deverá decretar a prisão preventiva?",
      alternativas: ["Para garantir a ordem econômica e a ordem pública.", "Sempre que o réu for reincidente.", "Quando o acusado confessar o crime.", "Para forçar o acusado a pagar a fiança."],
      correta: 0,
      explicacao: "O Art. 312 do CPP estabelece os requisitos da prisão preventiva, que pode ser decretada como garantia da ordem pública, da ordem econômica, por conveniência da instrução criminal ou para assegurar a aplicação da lei penal."
    },
    {
      enunciado: "A citação por hora certa no processo penal pode ocorrer quando:",
      alternativas: ["O réu está em local incerto e não sabido.", "O oficial de justiça, por duas vezes, houver procurado o citando em seu domicílio, e verificar que ele se oculta para não ser citado.", "O réu se recusa a assinar o mandado.", "O réu é funcionário público."],
      correta: 1,
      explicacao: "A citação por hora certa (Art. 362, CPP) é uma medida excepcional para os casos em que há a suspeita de que o réu está se ocultando para evitar a citação pessoal, frustrando o andamento do processo."
    },
    {
      enunciado: "Oferecida a denúncia, o juiz, se não a rejeitar liminarmente, recebê-la-á e ordenará:",
      alternativas: ["A imediata prisão do acusado.", "A citação do acusado para responder à acusação, por escrito, no prazo de 10 dias.", "O interrogatório do acusado como primeiro ato da instrução.", "A produção antecipada de provas."],
      correta: 1,
      explicacao: "Este é o primeiro passo após o recebimento da denúncia, conforme o Art. 396 do CPP. O réu é chamado ao processo para apresentar sua defesa escrita."
    },
    {
        enunciado: "Nos termos do artigo 252 do CPP, o juiz fica impedido de atuar no processo se:",
        alternativas: [
            "for sócio, acionista ou administrador de sociedade interessada no processo.",
            "for amigo íntimo ou inimigo capital de qualquer das partes.",
            "tiver funcionado como juiz de outra instância, pronunciando-se sobre a questão.",
            "tiver aconselhado qualquer das partes.",
            "ele, seu cônjuge, ascendente ou descendente, estiver respondendo a processo por fato análogo..."
        ],
        correta: 2,
        explicacao: "O Art. 252, III, do CPP, estabelece o impedimento do juiz que já atuou em outra instância no mesmo processo, para garantir a imparcialidade, pois ele já formou uma convicção sobre o caso. As outras opções (B, D, E) são causas de suspeição (Art. 254)."
    },
    {
        enunciado: "Assinale a alternativa correta com relação às normas sobre defensor no CPP.",
        alternativas: [
            "É direito do acusado nomear defensor particular, contudo, poderá o juiz recusá-lo diante da incapacidade técnica.",
            "Nenhum acusado, ainda que ausente ou foragido, será processado ou julgado sem defensor.",
            "Dispensa-se curador ao acusado menor, desde que acompanhado de advogado.",
            "A ausência do defensor, ainda que justificada, não pode resultar no adiamento da audiência.",
            "Ao defensor público ou dativo é facultado deixar de apresentar manifestação fundamentada."
        ],
        correta: 1,
        explicacao: "O Art. 261 do CPP consagra o princípio da defesa técnica indispensável, afirmando que 'Nenhum acusado, ainda que ausente ou foragido, será processado ou julgado sem defensor', sendo esta uma nulidade absoluta."
    },
    {
        enunciado: "Nos termos do artigo 361 do CPP, o réu que não for encontrado será citado por:",
        alternativas: [
            "declarado revel, com nomeação de defensor público.",
            "terá nomeado defensor dativo.",
            "carta precatória ou rogatória.",
            "edital, com prazo de 15 (quinze) dias.",
            "hora certa, de acordo com as regras do CPC."
        ],
        correta: 3,
        explicacao: "O Art. 361 do CPP estabelece que, se o réu não for encontrado, será citado por edital. A citação por hora certa (Art. 362) ocorre quando ele se oculta para não ser citado."
    },
    {
        enunciado: "De acordo com o artigo 394-A do CPP, terão prioridade de tramitação em todas as instâncias os processos que apurem a prática de:",
        alternativas: [
            "idosos como acusados ou vítimas.",
            "crime de intolerância ou violência em razão do gênero.",
            "idosos como vítimas.",
            "crime racial.",
            "crime hediondo."
        ],
        correta: 4,
        explicacao: "O Art. 394-A do CPP, incluído pelo Pacote Anticrime, concede prioridade de tramitação aos processos e procedimentos que apurem a prática de crime hediondo."
    },
    {
        enunciado: "No procedimento comum sumário, havendo mais de um acusado, o tempo previsto para a defesa de cada um será:",
        alternativas: [
            "dobrado, assim como o da acusação.",
            "definido pelo juiz, que poderá exarar a sentença por escrito.",
            "individual.",
            "convertido em apresentação de memoriais escritos.",
            "o mesmo, devendo ser dividido entre os defensores."
        ],
        correta: 2,
        explicacao: "O Art. 534, § 2º, do CPP, garante que, havendo mais de um acusado, o tempo para a defesa de cada um deles será individual, assegurando a ampla defesa a todos."
    }
  ],
  // ===================================================
  // DIREITO PROCESSUAL CIVIL
  // ===================================================
  direito_processual_civil: [
    {
      enunciado: "Qual o prazo regra para a interposição do recurso de apelação, segundo o Código de Processo Civil?",
      alternativas: ["15 dias úteis", "10 dias corridos", "30 dias úteis", "5 dias corridos"],
      correta: 0,
      explicacao: "Conforme o Art. 1.003, § 5º, do Código de Processo Civil, o prazo para interpor a maioria dos recursos, incluindo a apelação, e para respondê-los é de 15 dias úteis."
    },
    {
      enunciado: "A citação é o ato pelo qual se dá ciência ao réu para integrar a relação processual. Ela será feita preferencialmente por qual meio?",
      alternativas: ["Por oficial de justiça", "Por edital", "Pelo correio", "Por meio eletrônico"],
      correta: 3,
      explicacao: "O Art. 246 do CPC estabelece que a citação será feita preferencialmente por meio eletrônico, conforme regulamentado pelo Conselho Nacional de Justiça."
    },
    {
      enunciado: "São considerados dias úteis, para fins de contagem de prazo processual civil:",
      alternativas: ["Apenas os dias em que há expediente forense.", "Todos os dias, exceto domingos e feriados.", "Os dias em que não houver feriado nacional ou forense.", "Apenas de segunda a sexta-feira, excluindo feriados."],
      correta: 3,
      explicacao: "De acordo com o Art. 219 do CPC, na contagem de prazo em dias, estabelecido por lei ou pelo juiz, computar-se-ão somente os dias úteis (segunda a sexta, exceto feriados)."
    },
    {
      enunciado: "O ato pelo qual o escrivão certifica, nos autos, a ocorrência de determinado fato é chamado de:",
      alternativas: ["Conclusão", "Juntada", "Certidão", "Despacho"],
      correta: 2,
      explicacao: "Certidão é o documento emitido pelo servidor da justiça (escrivão/chefe de secretaria) que atesta (certifica) um fato ou ato processual ocorrido nos autos."
    },
    {
      enunciado: "A tutela provisória de urgência, de natureza cautelar, requerida em caráter antecedente, torna-se ineficaz se o autor não formular o pedido principal em:",
      alternativas: ["15 dias.", "5 dias.", "30 dias.", "10 dias."],
      correta: 2,
      explicacao: "Conforme o Art. 308 do CPC, efetivada a tutela cautelar, o pedido principal terá de ser formulado pelo autor no prazo de 30 dias, caso em que será apresentado nos mesmos autos."
    },
    {
      enunciado: "Qual recurso é cabível contra decisão interlocutória que versa sobre tutela provisória?",
      alternativas: ["Apelação", "Agravo de Instrumento", "Recurso Especial", "Embargos de Declaração"],
      correta: 1,
      explicacao: "O Art. 1.015, I, do CPC prevê expressamente o cabimento de Agravo de Instrumento contra decisões interlocutórias que versarem sobre tutelas provisórias."
    },
    {
      enunciado: "Os embargos de declaração são opostos no prazo de:",
      alternativas: ["15 dias úteis", "5 dias úteis", "10 dias úteis", "Não possuem prazo fixo."],
      correta: 1,
      explicacao: "Diferente da maioria dos recursos, o prazo para oposição dos Embargos de Declaração é de 5 dias úteis, conforme o Art. 1.023 do CPC."
    },
    {
      enunciado: "De acordo com o CPC, é dever das partes e de seus procuradores:",
      alternativas: ["Recorrer de todas as decisões desfavoráveis.", "Expor os fatos em juízo conforme a verdade.", "Formular pretensões apenas quando tiverem certeza do resultado.", "Deduzir defesa apenas quando houver prova documental."],
      correta: 1,
      explicacao: "O Art. 77, I, do CPC estabelece que é dever das partes, de seus procuradores e de todos que participam do processo, expor os fatos em juízo conforme a verdade, em respeito ao princípio da boa-fé processual."
    },
    {
        enunciado: "O pronunciamento do juiz que, sem resolver o mérito, põe fim à fase cognitiva do procedimento comum é denominado:",
        alternativas: ["Despacho", "Decisão Interlocutória", "Sentença", "Acórdão"],
        correta: 2,
        explicacao: "Esta é a definição de Sentença, conforme o Art. 203, § 1º, do CPC. Ela pode resolver o mérito (definitiva) ou não (terminativa), mas sempre põe fim a uma fase do processo ou à execução."
    },
    {
        enunciado: "A intimação é o ato pelo qual se dá ciência a alguém dos atos e dos termos do processo. Para os advogados, ela se dará preferencialmente por:",
        alternativas: ["Carta com aviso de recebimento.", "Oficial de justiça.", "Meio eletrônico, via Diário de Justiça.", "Edital afixado na sede do juízo."],
        correta: 2,
        explicacao: "O Art. 272 do CPC estabelece que as intimações dos advogados serão feitas, em regra, por publicação dos atos no órgão oficial, que é o Diário de Justiça Eletrônico."
    },
    {
        enunciado: "Conforme o CPC, o réu poderá oferecer contestação, por petição, no prazo de:",
        alternativas: ["10 dias", "15 dias", "20 dias", "30 dias"],
        correta: 1,
        explicacao: "O prazo para o réu apresentar sua defesa (contestação) é de 15 dias úteis, de acordo com o Art. 335 do CPC. O início da contagem do prazo varia conforme a forma da citação."
    },
    {
      enunciado: "O juiz NÃO resolverá o mérito quando:",
      alternativas: ["Decidir sobre a ocorrência de decadência ou prescrição.", "Homologar a renúncia à pretensão formulada na ação.", "Acolher a alegação de perempção, litispendência ou de coisa julgada.", "Julgar procedente o pedido formulado na ação principal."],
      correta: 2,
      explicacao: "Perempção, litispendência e coisa julgada são pressupostos processuais negativos que impedem a análise do mérito da causa, levando à extinção do processo sem resolução de mérito, conforme o Art. 485 do CPC. As outras opções são hipóteses de resolução de mérito (Art. 487)."
    },
    {
      enunciado: "No âmbito dos Juizados Especiais Cíveis (Lei 9.099/95), não se admitirá a intervenção de terceiros nem a assistência, mas se admite:",
      alternativas: ["A reconvenção.", "O recurso especial.", "A ação declaratória incidental.", "O litisconsórcio."],
      correta: 3,
      explicacao: "O Art. 10 da Lei 9.099/95 veda a intervenção de terceiros e a assistência. No entanto, o litisconsórcio (pluralidade de autores ou réus) é permitido, pois não se trata de uma forma de intervenção, mas de uma formação inicial do processo."
    },
    {
      enunciado: "O ato do oficial de justiça pelo qual se apreendem bens do executado para garantir o pagamento da dívida é chamado de:",
      alternativas: ["Citação", "Penhora", "Arresto", "Intimação"],
      correta: 1,
      explicacao: "A penhora é o ato de constrição judicial que individualiza e apreende bens do patrimônio do devedor para a satisfação do crédito do exequente (Art. 831, CPC)."
    },
    {
      enunciado: "A apelação, em regra, é dotada de qual efeito?",
      alternativas: ["Apenas devolutivo.", "Apenas suspensivo.", "Devolutivo e suspensivo.", "Regressivo."],
      correta: 2,
      explicacao: "Conforme o Art. 1.012 do CPC, a apelação, por regra geral, tem efeito suspensivo, o que significa que a sentença não produz efeitos imediatos. O efeito devolutivo é inerente a todos os recursos."
    },
    {
      enunciado: "Os atos processuais serão públicos, tramitando, todavia, em segredo de justiça o processo:",
      alternativas: ["Que envolva cobrança de dívidas bancárias.", "Em que o Estado seja parte.", "Que verse sobre casamento, filiação, ou direito de família.", "De execução fiscal."],
      correta: 2,
      explicacao: "O Art. 189, II, do CPC estabelece que os processos que versem sobre direito de família (casamento, separação, divórcio, filiação, alimentos, etc.) devem tramitar em segredo de justiça para preservar o direito à intimidade."
    },
    {
      enunciado: "A petição inicial será indeferida quando:",
      alternativas: ["O réu não for encontrado para citação.", "For inépta.", "O valor da causa for muito baixo.", "O autor não apresentar todas as provas de imediato."],
      correta: 1,
      explicacao: "A inépcia da petição inicial, que ocorre quando lhe falta pedido ou causa de pedir, da narração dos fatos não decorrer logicamente a conclusão, etc., é uma das causas de indeferimento (Art. 330, I, CPC)."
    },
    {
      enunciado: "Os prazos processuais suspendem-se:",
      alternativas: ["Durante a greve dos Correios.", "Quando o advogado da parte adoece.", "Durante o período de 20 de dezembro a 20 de janeiro, inclusive.", "A pedido de qualquer das partes."],
      correta: 2,
      explicacao: "O Art. 220 do CPC institui o recesso forense, período no qual ficam suspensos o curso do prazo processual, as audiências e as sessões de julgamento."
    },
    {
      enunciado: "O órgão do Poder Judiciário em que a causa é julgada por um colegiado de juízes (desembargadores ou ministros) é chamado de:",
      alternativas: ["Primeira instância", "Juízo monocrático", "Tribunal", "Cartório"],
      correta: 2,
      explicacao: "Tribunal é o órgão de segunda instância ou superior (TJ, TRF, STJ, STF) onde as decisões são tomadas por um grupo de julgadores, em sessões e acórdãos."
    },
    {
      enunciado: "Na Lei 9.099/95 (Juizados Especiais Cíveis), o recurso cabível contra a sentença é o:",
      alternativas: ["Recurso Inominado", "Apelação", "Agravo de Instrumento", "Recurso Ordinário"],
      correta: 0,
      explicacao: "O Art. 41 da Lei 9.099/95 prevê que da sentença, excetuada a homologatória de conciliação, caberá recurso para o próprio juizado, que é denominado pela doutrina e jurisprudência como 'Recurso Inominado'."
    },
    {
        enunciado: "Manuel propôs ação contra Afonso e descobriu que o juiz, Francisco, é amigo íntimo de Afonso. Diante da situação, assinale a alternativa correta.",
        alternativas: [
            "Acolhida a alegação, o tribunal condenará Francisco nas custas...",
            "Reconhecido o impedimento de Francisco, todos os atos do processo serão anulados.",
            "Caso Francisco não reconheça o pedido de suspeição, distribuirá o incidente ao tribunal.",
            "Manuel deverá aguardar a primeira oportunidade para falar nos autos para apresentar o pedido...",
            "Manuel terá o prazo de 5 (cinco) dias, a contar do conhecimento do fato, para alegar o impedimento..."
        ],
        correta: 2,
        explicacao: "A amizade íntima é causa de suspeição (Art. 145, I, CPC). Conforme o Art. 146, § 1º, se o juiz não reconhecer a suspeição, a parte deve arguir o incidente em petição específica, e o juiz, apresentando suas razões, remeterá o incidente ao tribunal para julgamento."
    },
    {
        enunciado: "Agatha interpôs recurso de apelação em processo eletrônico contra uma Autarquia Municipal. É correto afirmar que Agatha:",
        alternativas: [
            "está dispensada de realizar o recolhimento do preparo e do porte de remessa...",
            "será intimada, na pessoa de seu advogado, para realizar o recolhimento em dobro, sob pena de deserção se não comprovar o recolhimento...",
            "está dispensada do recolhimento por se tratar de ação contra Autarquia Municipal.",
            "poderá, no prazo de 5 (cinco) dias, efetuar o preparo se provar justo impedimento...",
            "não será punida com a pena de deserção se, na hipótese de dúvida quanto ao recolhimento... o relator a intimar para sanar o vício..."
        ],
        correta: 4,
        explicacao: "Conforme o Art. 1.007, § 7º, do CPC, 'O equívoco no preenchimento da guia de custas não implicará a aplicação da pena de deserção, cabendo ao relator, na hipótese de dúvida quanto ao recolhimento, intimar o recorrente para sanar o vício no prazo de 5 (cinco) dias'."
    },
    {
        enunciado: "Acerca do pedido no Juizado Especial Cível, assinale a alternativa correta.",
        alternativas: [
            "...não é possível instaurar o processo apenas com a apresentação de pedido oral.",
            "Havendo pedidos contrapostos, poderá ser dispensada a contestação formal e ambos serão apreciados na mesma sentença.",
            "É lícito formular o pedido à Secretaria do Juizado, desde que certo e determinado, por meio de sistema de fichas...",
            "Os pedidos poderão ser alternativos, subsidiários ou cumulados, ainda que não conexos...",
            "Registrado o pedido, ... a Secretaria designará a sessão de conciliação... no prazo de trinta dias."
        ],
        correta: 1,
        explicacao: "No Juizado Especial Cível, o réu pode apresentar um pedido a seu favor (pedido contraposto) na própria contestação, sem a necessidade de uma peça autônoma (reconvenção), e ambos serão julgados na mesma sentença (Art. 31, Lei 9.099/95)."
    },
    {
        enunciado: "Acerca dos conciliadores e juízes leigos no Juizado Especial da Fazenda Pública, é correto afirmar:",
        alternativas: [
            "Poderá o conciliador, para fins de encaminhamento da composição amigável, ouvir as partes e testemunhas...",
            "Os juízes leigos ficarão impedidos de exercer a advocacia perante todos os Juizados Especiais da Fazenda Pública do país...",
            "Cabe ao conciliador, sob a supervisão do juiz leigo, conduzir a audiência de conciliação.",
            "Os juízes leigos serão recrutados entre advogados com mais de cinco anos de experiência.",
            "Os conciliadores, ao contrário dos juízes leigos, são auxiliares da Justiça e poderão ser estudantes..."
        ],
        correta: 0,
        explicacao: "O Art. 16 da Lei 12.153/2009 (Juizados da Fazenda Pública) autoriza o conciliador a ouvir as partes e testemunhas para buscar a composição amigável do litígio."
    },
    {
      enunciado: "O prazo para o Ministério Público, a Defensoria Pública e a Advocacia Pública se manifestarem nos autos é contado:",
      alternativas: ["Em dobro e em dias corridos.", "Em dobro e em dias úteis.", "De forma simples e em dias úteis.", "Em quádruplo e em dias úteis."],
      correta: 1,
      explicacao: "O Art. 180, 183 e 186 do CPC garantem prazo em dobro para todas as manifestações processuais, respectivamente, do Ministério Público, União, Estados, DF, Municípios e suas autarquias, e da Defensoria Pública. A contagem é sempre em dias úteis (Art. 219)."
    }
  ],
  // ===================================================
  // DIREITO CONSTITUCIONAL
  // ===================================================
  direito_constitucional: [
    {
        enunciado: "Conforme o Art. 37 da CF, a investidura em cargo ou emprego público depende de aprovação prévia em concurso público, ressalvadas:",
        alternativas: ["As nomeações para qualquer cargo em comissão.", "As nomeações para cargo em comissão, declarados em lei de livre nomeação e exoneração.", "Os cargos de natureza técnica que exijam notório saber.", "As contratações temporárias para cargos de direção."],
        correta: 1,
        explicacao: "O Art. 37, II, da CF estabelece a regra do concurso público, mas excetua 'as nomeações para cargo em comissão declarado em lei de livre nomeação e exoneração', que são as funções de confiança."
    },
    {
        enunciado: "O Mandado de Injunção será concedido sempre que:",
        alternativas: ["Alguém sofrer coação em sua liberdade de locomoção por ilegalidade ou abuso de poder.", "A falta de norma regulamentadora torne inviável o exercício dos direitos e liberdades constitucionais.", "Para proteger direito líquido e certo, não amparado por habeas corpus ou habeas data.", "O responsável pela informação se recuse a fornecê-la ou a retificá-la."],
        correta: 1,
        explicacao: "Esta é a exata definição da finalidade do Mandado de Injunção, previsto no Art. 5º, LXXI, da CF. Ele serve para combater a inércia do poder público em regulamentar uma norma constitucional de eficácia limitada."
    },
    {
        enunciado: "Assinale a alternativa que descreve um direito social, nos termos do Art. 6º da Constituição Federal.",
        alternativas: ["Livre manifestação do pensamento.", "Inviolabilidade da vida privada.", "Moradia.", "Liberdade de associação para fins lícitos."],
        correta: 2,
        explicacao: "O Art. 6º da CF elenca os direitos sociais, que incluem educação, saúde, alimentação, trabalho, moradia, transporte, lazer, segurança, previdência social, etc. Os demais são direitos individuais previstos no Art. 5º."
    },
    {
      enunciado: "De acordo com a CF, é vedada a cassação de direitos políticos, cuja perda ou suspensão só se dará nos casos de:",
      alternativas: ["Sentença penal condenatória transitada em julgado.", "Recusa de cumprir obrigação a todos imposta, exclusivamente.", "Dívida fiscal com a União.", "Cancelamento da naturalização por qualquer motivo."],
      correta: 0,
      explicacao: "O Art. 15 da CF lista os casos de perda ou suspensão dos direitos políticos. Um dos principais é a 'condenação criminal transitada em julgado, enquanto durarem seus efeitos'."
    },
    {
      enunciado: "O remédio constitucional cabível para proteger direito líquido e certo, não amparado por habeas corpus ou habeas data, quando o responsável pela ilegalidade for autoridade pública, é o:",
      alternativas: ["Mandado de Segurança", "Mandado de Injunção", "Ação Popular", "Ação Civil Pública"],
      correta: 0,
      explicacao: "Esta é a definição clássica do Mandado de Segurança, previsto no Art. 5º, LXIX, da CF. É uma ação residual para proteger direitos que não são de locomoção (HC) nem de informação pessoal (HD)."
    },
    {
      enunciado: "O prazo de validade do concurso público será de até:",
      alternativas: ["Um ano, prorrogável uma vez, por igual período.", "Dois anos, improrrogável.", "Quatro anos, prorrogável uma vez, por igual período.", "Dois anos, prorrogável uma vez, por igual período."],
      correta: 3,
      explicacao: "Conforme o Art. 37, III, da CF, o prazo de validade do concurso público será de até dois anos, permitida uma única prorrogação por igual período."
    },
    {
      enunciado: "A CF estabelece que todos podem reunir-se pacificamente, sem armas, em locais abertos ao público, independentemente de autorização, desde que:",
      alternativas: ["Não frustrem outra reunião anteriormente convocada para o mesmo local, sendo apenas exigido prévio aviso à autoridade competente.", "Seja obtida licença especial da polícia militar.", "A reunião não tenha caráter político.", "O número de participantes não exceda a cinquenta pessoas."],
      correta: 0,
      explicacao: "Este é o teor do Art. 5º, XVI, da CF, que garante o direito de reunião. A liberdade não é absoluta, exigindo o prévio aviso e o respeito a reuniões já marcadas."
    },
    {
      enunciado: "A quem compete processar e julgar, originariamente, o Presidente da República, nos crimes de responsabilidade?",
      alternativas: ["Supremo Tribunal Federal", "Superior Tribunal de Justiça", "Senado Federal", "Câmara dos Deputados"],
      correta: 2,
      explicacao: "Conforme o Art. 52, I, da CF, compete privativamente ao Senado Federal processar e julgar o Presidente e o Vice-Presidente da República nos crimes de responsabilidade."
    },
    {
      enunciado: "Segundo a CF, a lei não prejudicará:",
      alternativas: ["O direito adquirido, o ato jurídico perfeito e a coisa julgada.", "Os costumes, os princípios gerais do direito e a equidade.", "A ordem econômica e a livre iniciativa.", "A soberania e a cidadania."],
      correta: 0,
      explicacao: "O Art. 5º, XXXVI, da CF, estabelece o princípio da segurança jurídica, protegendo o direito adquirido, o ato jurídico perfeito e a coisa julgada contra alterações legislativas posteriores."
    },
    {
      enunciado: "A idade mínima para se eleger para o cargo de Deputado Federal é de:",
      alternativas: ["18 anos", "30 anos", "21 anos", "35 anos"],
      correta: 2,
      explicacao: "O Art. 14, § 3º, VI, da CF, estabelece as idades mínimas para os cargos eletivos: 35 anos para Presidente, 30 anos para Governador, e 21 anos para Deputado Federal, Estadual ou Distrital, Prefeito e juiz de paz."
    },
    {
      enunciado: "A soberania, a cidadania, a dignidade da pessoa humana, os valores sociais do trabalho e da livre iniciativa, e o pluralismo político são:",
      alternativas: ["Objetivos Fundamentais da República Federativa do Brasil.", "Direitos Sociais.", "Princípios que regem as relações internacionais do Brasil.", "Fundamentos da República Federativa do Brasil."],
      correta: 3,
      explicacao: "Estes são os Fundamentos da República, elencados no Art. 1º da Constituição Federal, conhecidos pelo mnemônico SO-CI-DI-VA-PLU."
    },
    {
      enunciado: "É direito dos trabalhadores urbanos e rurais, além de outros, o:",
      alternativas: ["Seguro-desemprego, em caso de desemprego voluntário.", "Piso salarial proporcional à complexidade do trabalho.", "Repouso semanal remunerado, preferencialmente aos sábados.", "Jornada de oito horas para o trabalho realizado em turnos ininterruptos de revezamento."],
      correta: 1,
      explicacao: "O Art. 7º, V, da CF, garante um piso salarial proporcional à extensão e à complexidade do trabalho. As outras opções contêm incorreções: desemprego INvoluntário; repouso preferencialmente AOS DOMINGOS; jornada de SEIS horas para turnos de revezamento."
    },
    {
      enunciado: "Qual dos seguintes cargos é privativo de brasileiro nato?",
      alternativas: ["Prefeito", "Senador", "Ministro da Defesa", "Governador de Estado"],
      correta: 2,
      explicacao: "O Art. 12, § 3º, da CF, lista os cargos privativos de brasileiro nato, que incluem, entre outros, o de Ministro de Estado da Defesa."
    },
    {
      enunciado: "Compete privativamente à União legislar sobre:",
      alternativas: ["Procedimentos em matéria processual.", "Direito tributário, financeiro, penitenciário, econômico e urbanístico.", "Direito civil, comercial, penal, processual, eleitoral, agrário, marítimo.", "Orçamento e custas dos serviços forenses."],
      correta: 2,
      explicacao: "Conforme o Art. 22, I, da CF, a competência para legislar sobre os grandes ramos do direito material e processual é privativa da União. Direito tributário e financeiro (B) e procedimentos (A) são de competência concorrente."
    },
    {
      enunciado: "A criação de um novo Município far-se-á por lei estadual, e dependerá de:",
      alternativas: ["Decisão do Congresso Nacional.", "Consulta prévia, mediante plebiscito, às populações dos Municípios envolvidos.", "Aprovação da maioria dos vereadores da capital do Estado.", "Autorização do Presidente da República."],
      correta: 1,
      explicacao: "O Art. 18, § 4º, da CF, estabelece os requisitos para a criação de novos municípios, incluindo a necessidade de plebiscito com as populações diretamente interessadas."
    },
    {
      enunciado: "Ninguém será preso senão em flagrante delito ou por ordem escrita e fundamentada de autoridade judiciária competente, salvo nos casos de:",
      alternativas: ["Crime hediondo.", "Grave ameaça à ordem pública.", "Transgressão militar ou crime propriamente militar.", "Dívida de pensão alimentícia."],
      correta: 2,
      explicacao: "O Art. 5º, LXI, da CF, estabelece a regra geral da prisão, mas excetua os casos de transgressão militar e crime propriamente militar, definidos em lei, que possuem regramento próprio."
    },
    {
      enunciado: "Os servidores públicos estáveis perderão o cargo em virtude de:",
      alternativas: ["Processo de avaliação periódica de desempenho, na forma de lei complementar.", "Decisão administrativa de seu superior hierárquico.", "Mudança de governo ou partido político no poder.", "Qualquer processo criminal, independentemente do resultado."],
      correta: 0,
      explicacao: "O Art. 41, § 1º, da CF, prevê as hipóteses de perda do cargo pelo servidor estável. Uma delas é mediante procedimento de avaliação periódica de desempenho, assegurada a ampla defesa."
    },
    {
      enunciado: "Qual é um dos Objetivos Fundamentais da República Federativa do Brasil?",
      alternativas: ["Garantir a independência nacional.", "Construir uma sociedade livre, justa e solidária.", "Garantir a prevalência dos direitos humanos.", "Conceder asilo político."],
      correta: 1,
      explicacao: "Os Objetivos Fundamentais estão no Art. 3º da CF. 'Construir uma sociedade livre, justa e solidária' é o inciso I. As outras opções são fundamentos ou princípios das relações internacionais."
    },
    {
      enunciado: "A Ação Popular visa anular ato lesivo:",
      alternativas: ["Ao direito de locomoção.", "À honra de uma pessoa.", "Ao patrimônio público, à moralidade administrativa, ao meio ambiente e ao patrimônio histórico e cultural.", "A direito líquido e certo do autor."],
      correta: 2,
      explicacao: "Conforme o Art. 5º, LXXIII, da CF, qualquer cidadão é parte legítima para propor ação popular que vise a anular ato lesivo ao patrimônio público ou de entidade de que o Estado participe, e outros bens difusos."
    },
    {
      enunciado: "O direito de petição aos Poderes Públicos em defesa de direitos ou contra ilegalidade ou abuso de poder é:",
      alternativas: ["Assegurado a todos, independentemente do pagamento de taxas.", "Permitido apenas mediante representação por advogado.", "Restrito aos cidadãos brasileiros.", "Condicionado à comprovação do interesse público."],
      correta: 0,
      explicacao: "O Art. 5º, XXXIV, 'a', da CF, garante a todos, sem necessidade de pagar taxas, o direito de petição para defesa de direitos."
    },
    {
        enunciado: "Considere que Catarina é russa e há dezesseis anos ininterruptos reside no Brasil. É correto afirmar que Catarina:",
        alternativas: [
            "precisa comprovar idoneidade moral para ser considerada naturalizada.",
            "para ser naturalizada, poderá ter condenação penal, desde que não seja por tráfico.",
            "para adquirir a nacionalidade brasileira deverá comprovar ter ensino superior.",
            "se não tiver condenação penal e se requerer a nacionalidade, será considerada como naturalizada.",
            "poderá ser naturalizada após comprovar que vive há vinte anos no Brasil..."
        ],
        correta: 3,
        explicacao: "O Art. 12, II, 'b', da CF, estabelece as condições para a naturalização de estrangeiros de qualquer nacionalidade: residência no Brasil por mais de 15 anos ininterruptos e sem condenação penal, desde que requeiram a nacionalidade brasileira."
    },
    {
        enunciado: "Assinale a alternativa que contém todos os símbolos da República Federativa do Brasil.",
        alternativas: [
            "A Constituição Federal, a bandeira, os hinos e o Supremo Tribunal Federal.",
            "O Congresso Nacional, a bandeira, os hinos e o Supremo Tribunal Federal.",
            "A bandeira, o hino, as armas e o selo nacionais.",
            "A bandeira, os hinos, a Constituição Federal e o Congresso Nacional.",
            "As bandeiras, os hinos, a Capital Federal e a Constituição Federal."
        ],
        correta: 2,
        explicacao: "Conforme o Art. 13, § 1º, da Constituição Federal, 'São símbolos da República Federativa do Brasil a bandeira, o hino, as armas e o selo nacionais'."
    },
    {
        enunciado: "Com base no disposto na Constituição, é correto afirmar sobre os direitos sociais de um trabalhador rural que:",
        alternativas: [
            "o aviso prévio será proporcional ao tempo de serviço e não inferior a quinze dias.",
            "a Constituição não estipula a proteção do emprego rural em face do processo de automação...",
            "a Constituição já assegura a assistência gratuita aos filhos e dependentes desde o nascimento até 5 (cinco) anos de idade em creches e pré-escolas.",
            "a proposta de acordo coletivo não poderá ser aceita, pois a Constituição veda a redução do salário.",
            "o seguro contra acidente de trabalho, custeado pelo empregador, exclui a responsabilidade deste por indenização em caso de culpa."
        ],
        correta: 2,
        explicacao: "O Art. 7º, XXV, da CF, garante 'assistência gratuita aos filhos e dependentes desde o nascimento até 5 (cinco) anos de idade em creches e pré-escolas'. As outras opções contêm erros (aviso prévio mínimo de 30 dias; há proteção contra automação; o salário é irredutível SALVO acordo ou convenção coletiva; o seguro NÃO exclui a indenização se houver dolo ou culpa)."
    },
    {
        enunciado: "A respeito dos Servidores Públicos, assinale a alternativa que está de acordo com o expresso na Constituição Federal.",
        alternativas: [
            "Admite-se em situações excepcionais a incorporação de vantagens de caráter temporário...",
            "A fixação dos padrões de vencimento observará, entre outras coisas, o grau de dificuldade exigido no concurso...",
            "A União, os Estados e os Municípios manterão escolas de governo para a formação e o aperfeiçoamento dos servidores públicos.",
            "Os Poderes Executivo, Legislativo e Judiciário publicarão mensalmente os valores do subsídio...",
            "Os Secretários Estaduais e Municipais serão remunerados exclusivamente por subsídio..."
        ],
        correta: 4,
        explicacao: "O Art. 39, § 4º, da CF, estabelece que os detentores de mandato eletivo, os Ministros de Estado e os Secretários Estaduais e Municipais serão remunerados exclusivamente por subsídio fixado em parcela única, vedado o acréscimo de qualquer gratificação, adicional, abono, etc."
    },
    {
        enunciado: "De acordo com o expresso na Constituição Federal, as Turmas Recursais:",
        alternativas: [
            "são órgãos autárquicos do Poder Judiciário.",
            "não são órgãos do Poder Judiciário.",
            "são órgãos autônomos do Poder Judiciário.",
            "subordinam-se ao Conselho Nacional de Justiça e têm jurisdição em todo o território nacional.",
            "são órgãos do sistema dos Juizados Especiais e compostas por juízes de primeiro grau."
        ],
        correta: 4,
        explicacao: "O Art. 98, I, da CF, prevê a criação dos juizados especiais, providos por juízes togados, ou togados e leigos, e menciona o julgamento de recursos por turmas de juízes de primeiro grau. As Turmas Recursais são, portanto, parte integrante da estrutura dos Juizados."
    }
  ],
  // ===================================================
  // DIREITO ADMINISTRATIVO
  // ===================================================
  direito_administrativo: [
    {
        enunciado: "O atributo do ato administrativo que impõe a coercibilidade de seu cumprimento é a:",
        alternativas: ["Presunção de legitimidade", "Autoexecutoriedade", "Tipicidade", "Imperatividade"],
        correta: 1,
        explicacao: "A autoexecutoriedade é o atributo que permite à Administração executar suas próprias decisões, sem precisar de autorização prévia do Poder Judiciário, inclusive com o uso de meios de coação direta."
    },
    {
        enunciado: "Segundo a Lei de Improbidade Administrativa (Lei nº 8.429/92), a ação para a aplicação das sanções nela previstas prescreve em:",
        alternativas: ["5 anos", "3 anos", "10 anos", "8 anos"],
        correta: 3,
        explicacao: "Com as alterações da Lei 14.230/2021, o prazo prescricional para a ação de improbidade passou a ser de 8 anos, contados a partir da ocorrência do fato ou, no caso de infrações permanentes, do dia em que cessou a permanência."
    },
    {
        enunciado: "Um servidor público que utiliza materiais da repartição para realizar um trabalho particular comete um ato de improbidade que gera:",
        alternativas: ["Enriquecimento ilícito.", "Prejuízo ao erário.", "Atentado contra os princípios da administração.", "Concessão indevida de benefício fiscal."],
        correta: 1,
        explicacao: "O uso de bens públicos em proveito particular, mesmo que não gere enriquecimento para o agente, causa um dano (prejuízo) ao patrimônio público. A conduta se enquadra no Art. 10 da Lei de Improbidade Administrativa."
    },
    {
      enunciado: "A anulação de um ato administrativo produz efeitos:",
      alternativas: ["Ex nunc, ou seja, a partir da data da anulação.", "Ex tunc, ou seja, retroativos à data da prática do ato.", "Apenas para o futuro, respeitando os atos já consumados.", "A critério da autoridade que anula o ato."],
      correta: 1,
      explicacao: "A anulação ocorre por ilegalidade, portanto, o ato nunca deveria ter existido. Seus efeitos são 'ex tunc', retroagindo para desfazer as consequências desde sua origem. A revogação, por conveniência, tem efeitos 'ex nunc' (não retroativos)."
    },
    {
      enunciado: "O poder da Administração Pública de apurar infrações e aplicar penalidades aos servidores públicos e demais pessoas sujeitas à disciplina administrativa é o Poder:",
      alternativas: ["Disciplinar", "Regulamentar", "de Polícia", "Hierárquico"],
      correta: 0,
      explicacao: "O Poder Disciplinar é o que confere à Administração a prerrogativa de punir internamente as infrações funcionais de seus servidores e de particulares com vínculo específico com a Administração."
    },
    {
      enunciado: "Nos termos da Lei nº 8.429/92 (Improbidade Administrativa), a aplicação das sanções de suspensão dos direitos políticos e perda da função pública depende de:",
      alternativas: ["Decisão do superior hierárquico.", "Julgamento em processo administrativo disciplinar.", "Trânsito em julgado da sentença condenatória.", "Aprovação pelo Tribunal de Contas."],
      correta: 2,
      explicacao: "Com as recentes alterações na Lei de Improbidade, ficou estabelecido que sanções graves como a perda da função pública e a suspensão dos direitos políticos só podem ser efetivadas após o trânsito em julgado da sentença condenatória."
    },
    {
      enunciado: "A aquisição de bens e serviços pelo poder público deve ser precedida, em regra, de:",
      alternativas: ["Contratação direta", "Licitação", "Ordem de serviço", "Concessão"],
      correta: 1,
      explicacao: "O Art. 37, XXI, da CF, estabelece a obrigatoriedade de licitação para contratações públicas, garantindo a isonomia e a seleção da proposta mais vantajosa. A contratação direta é exceção."
    },
    {
      enunciado: "O ato administrativo que cria obrigações ou impõe vedações aos administrados, de forma geral e abstrata, decorre do poder:",
      alternativas: ["de Polícia", "Hierárquico", "Disciplinar", "Regulamentar"],
      correta: 3,
      explicacao: "O Poder Regulamentar (ou normativo) é a prerrogativa da Administração de editar atos gerais e abstratos, como decretos e regulamentos, para fiel execução das leis."
    },
    {
      enunciado: "Quando um servidor público é transferido para exercer suas funções em outra cidade, sem mudança de cargo, ocorre a:",
      alternativas: ["Promoção", "Readaptação", "Remoção", "Reversão"],
      correta: 2,
      explicacao: "Remoção é o deslocamento do servidor, a pedido ou de ofício, no âmbito do mesmo quadro, com ou sem mudança de sede. Não altera a situação funcional do servidor."
    },
    {
      enunciado: "A demissão de um servidor público estável por insuficiência de desempenho deve ser precedida de:",
      alternativas: ["Inquérito policial", "Processo judicial", "Processo administrativo em que lhe seja assegurada ampla defesa.", "Aviso prévio de 30 dias."],
      correta: 2,
      explicacao: "Tanto a Constituição quanto o Estatuto dos Servidores garantem que a demissão, mesmo por insuficiência de desempenho, só pode ocorrer após um processo administrativo que garanta o contraditório e a ampla defesa."
    },
    {
      enunciado: "O atributo pelo qual o ato administrativo se impõe a terceiros, independentemente de sua concordância, é a:",
      alternativas: ["Tipicidade", "Presunção de legitimidade", "Imperatividade", "Autoexecutoriedade"],
      correta: 2,
      explicacao: "A imperatividade é o atributo que permite que a Administração Pública imponha unilateralmente obrigações a terceiros, criando uma relação vertical com o administrado."
    },
    {
      enunciado: "Um dos princípios que rege a Administração Pública, que exige que a atuação do agente público seja impessoal e vise sempre o interesse público, é o da:",
      alternativas: ["Eficiência", "Legalidade", "Moralidade", "Impessoalidade"],
      correta: 3,
      explicacao: "O princípio da Impessoalidade, previsto no Art. 37 da CF, determina que os atos administrativos devem ser praticados visando a finalidade pública, sem favoritismos ou perseguições pessoais."
    },
    {
      enunciado: "A delegação de um serviço público a um particular, por meio de licitação na modalidade concorrência, para que o execute por sua conta e risco, é denominada:",
      alternativas: ["Permissão", "Autorização", "Concessão", "Terceirização"],
      correta: 2,
      explicacao: "A Concessão de serviço público é o contrato administrativo pelo qual a Administração transfere a execução de um serviço ao particular, que se remunera, em geral, pela cobrança de tarifas dos usuários."
    },
    {
      enunciado: "O ato administrativo vinculado é aquele em que:",
      alternativas: ["A lei estabelece todos os requisitos e elementos para sua prática.", "O administrador pode escolher entre várias soluções possíveis.", "Não precisa de motivação.", "Pode ser revogado a qualquer tempo."],
      correta: 0,
      explicacao: "No ato vinculado, a lei não confere ao administrador margem de liberdade (discricionariedade). Ele deve agir exatamente como a lei determina."
    },
    {
      enunciado: "A reintegração é a forma de provimento derivado que consiste no:",
      alternativas: ["Retorno do servidor aposentado por invalidez, quando cessam os motivos da aposentadoria.", "Reinvestidura do servidor estável no cargo anteriormente ocupado, quando invalidada sua demissão.", "Retorno do servidor estável ao cargo anterior em caso de inabilitação em estágio probatório de outro cargo.", "Aproveitamento do servidor em cargo compatível com a limitação que tenha sofrido."],
      correta: 1,
      explicacao: "A reintegração ocorre quando a demissão de um servidor estável é invalidada por decisão administrativa ou judicial, garantindo-lhe o retorno ao cargo com ressarcimento de todas as vantagens."
    },
    {
      enunciado: "O poder que permite à Administração Pública restringir e condicionar o exercício de direitos individuais em benefício do interesse coletivo é o:",
      alternativas: ["Poder Hierárquico", "Poder Disciplinar", "Poder de Polícia", "Poder Vinculado"],
      correta: 2,
      explicacao: "O Poder de Polícia é a faculdade da Administração de limitar o exercício de direitos individuais (como o de propriedade ou de profissão) para adequá-los ao bem-estar social."
    },
    {
      enunciado: "Conforme a Lei nº 14.133/2021 (Nova Lei de Licitações), a modalidade de licitação para contratação de bens e serviços especiais, como obras e serviços de engenharia, é a:",
      alternativas: ["Pregão", "Leilão", "Concorrência", "Diálogo competitivo"],
      correta: 2,
      explicacao: "A Concorrência, na nova lei, é a modalidade utilizada para a contratação de bens e serviços especiais, obras e serviços de engenharia. O Pregão ficou restrito a bens e serviços comuns."
    },
    {
      enunciado: "Um dos elementos do ato administrativo, que corresponde ao resultado prático que o ato se destina a alcançar, é o(a):",
      alternativas: ["Motivo", "Forma", "Objeto", "Finalidade"],
      correta: 3,
      explicacao: "A Finalidade é o objetivo de interesse público que o ato administrativo visa atingir. É um elemento sempre vinculado à lei."
    },
    {
      enunciado: "A aquisição da estabilidade no serviço público ocorre após:",
      alternativas: ["Dois anos de efetivo exercício.", "Três anos de efetivo exercício e aprovação em avaliação especial de desempenho.", "Cinco anos de efetivo exercício.", "Aprovação no concurso público e posse."],
      correta: 1,
      explicacao: "Conforme o Art. 41 da CF, o servidor nomeado em virtude de concurso público adquire estabilidade após 3 anos de efetivo exercício e aprovação em avaliação de desempenho."
    },
    {
      enunciado: "O ato administrativo que necessita da manifestação de vontade de mais de um órgão ou autoridade é classificado como:",
      alternativas: ["Ato simples", "Ato composto", "Ato complexo", "Ato bilateral"],
      correta: 2,
      explicacao: "O ato complexo é aquele que resulta da fusão de vontades de órgãos diferentes para formar um único ato. Ex: a nomeação de um ministro do STF, que envolve a vontade do Presidente e a aprovação do Senado."
    },
    {
        enunciado: "Maria, advogada, presenciou João, servidor do TJSP, praticar conduta de abuso de poder. Com base na Lei nº 10.261/68, é correto afirmar que:",
        alternativas: [
            "João deverá ser suspenso por prazo não superior a 90 dias...",
            "a Maria é assegurado o direito de representar, e a pena aplicável se sujeita à prescrição de 2 anos.",
            "caso outro servidor presencie, terá a faculdade de representar em 15 dias.",
            "caso seja aplicada pena de suspensão, João terá o prazo de 15 dias para interpor recurso.",
            "Maria, como qualquer pessoa, poderá representar João..."
        ],
        correta: 1,
        explicacao: "Conforme a Lei 10.261/68, qualquer pessoa pode representar contra ilegalidade ou abuso de poder (Art. 252). A pena de repreensão prescreve em 2 anos (Art. 261, II)."
    },
    {
        enunciado: "A respeito da extinção da punibilidade pela prescrição, com base na Lei nº 10.261/68, assinale a alternativa correta.",
        alternativas: [
            "O lapso prescricional corresponde, na hipótese de desclassificação, ao da pena efetivamente aplicada.",
            "É causa de suspensão do prazo prescricional a expedição da portaria que instaura processo disciplinar.",
            "A extinção da punibilidade pela prescrição não autoriza o registro do fato nos assentamentos do servidor.",
            "A prescrição começa a correr, nas faltas continuadas, do dia em que tenha se iniciado a continuação.",
            "A prescrição é interrompida durante o prazo do Termo de Ajustamento de Conduta."
        ],
        correta: 2,
        explicacao: "O Art. 263, § 2º, da Lei 10.261/68 é claro ao afirmar que 'Extinta a punibilidade pela prescrição, a autoridade julgadora determinará o registro do fato nos assentamentos individuais do servidor'."
    },
    {
        enunciado: "Isaías, servidor público, teve contra si aplicada pena disciplinar e decide interpor recurso. É correto afirmar que:",
        alternativas: [
            "o recurso terá efeito suspensivo...",
            "o recurso deverá ser interposto no prazo de 20 dias...",
            "o recurso deverá ser apresentado à autoridade que deverá julgá-lo...",
            "o recurso será apreciado, ainda que incorretamente denominado ou endereçado...",
            "na hipótese de a decisão ser mantida, Isaías poderá, a qualquer tempo, apresentar pedido de reconsideração..."
        ],
        correta: 3,
        explicacao: "O Art. 315 da Lei 10.261/68 consagra o princípio do formalismo moderado, estabelecendo que 'o recurso não será conhecido quando interposto fora do prazo, mas será apreciado pela autoridade competente, ainda que incorretamente denominado ou endereçado'."
    },
    {
        enunciado: "De acordo com a Lei nº 10.261/68, o processo disciplinar será concluído, em regra, no prazo de até:",
        alternativas: ["60 dias.", "90 dias.", "180 dias.", "30 dias.", "120 dias"],
        correta: 1,
        explicacao: "Conforme o Art. 308 da Lei 10.261/68, 'O processo disciplinar deverá ser concluído no prazo de 90 (noventa) dias, contados da data da citação do servidor'."
    },
    {
        enunciado: "A respeito das Práticas Autocompositivas na Lei nº 10.261/68, é correto afirmar que:",
        alternativas: [
            "o Termo de Ajustamento de Conduta não poderá ser adotado em casos de dano a bem público culposo.",
            "as sessões serão conduzidas por um Procurador do Estado em ambiente que assegure a publicidade.",
            "a celebração de acordo ensejará a extinção de punibilidade caso a conduta não gere prejuízo ao erário e sejam cabíveis penas de repreensão, suspensão e multa.",
            "a autoridade competente poderá encaminhar o caso para as práticas autocompositivas, o que importará na suspensão do processo e da prescrição.",
            "o cumprimento do TAC importará na minoração da pena, e seu prazo não poderá ser inferior a 2 anos."
        ],
        correta: 2,
        explicacao: "O Art. 266-A, § 2º, da Lei 10.261/68, estabelece exatamente esta regra, permitindo a extinção da punibilidade mediante acordo para infrações de menor potencial ofensivo."
    }
  ],
  // ===================================================
  // NORMAS DA CORREGEDORIA
  // ===================================================
  normas_da_corregedoria: [
    {
        enunciado: "Incumbe ao Escrivão Judicial, de acordo com as Normas da CGJ-SP:",
        alternativas: ["Proferir decisões interlocutórias.", "Realizar audiências na ausência do juiz.", "Abrir conclusão dos autos ao juiz no prazo de 1 dia.", "Aconselhar as partes sobre o mérito."],
        correta: 2,
        explicacao: "É uma das principais incumbências do diretor de ofício (escrivão). Após a juntada de petições, os autos devem ser encaminhados (feitos conclusos) ao juiz para despacho, decisão ou sentença no prazo de 1 dia."
    },
    {
        enunciado: "A restauração de autos extraviados ou destruídos será processada:",
        alternativas: ["Em um novo processo, com nova distribuição.", "Nos próprios autos, após sua localização.", "Em autos apartados, apensados ao processo principal se encontrado.", "Perante o Tribunal de Justiça, independentemente da instância."],
        correta: 0,
        explicacao: "A restauração de autos dá origem a um novo processo, com nova numeração e registro, onde as partes serão intimadas a apresentar as cópias de documentos que possuírem para recompor o processo original."
    },
    {
        enunciado: "Segundo as Normas da Corregedoria, é vedado ao servidor lançar nos autos cotas:",
        alternativas: ["Certificando o decurso de um prazo.", "Interlineares ou marginais.", "Informando a conclusão dos autos ao juiz.", "Indicando o número de folhas do processo."],
        correta: 1,
        explicacao: "As Normas proíbem expressamente que os servidores façam anotações nas margens ou entrelinhas dos autos. Qualquer observação ou informação necessária deve ser feita por meio de uma certidão formal."
    },
    {
      enunciado: "Os mandados, em regra, serão expedidos e assinados:",
      alternativas: ["Exclusivamente pelo Juiz.", "Pelo servidor, com a rubrica do Juiz.", "Eletronicamente pelo Escrivão Judicial, que os assinará digitalmente.", "Pelo Oficial de Justiça que irá cumpri-lo."],
      correta: 2,
      explicacao: "Com o processo eletrônico, as Normas da CGJ estabelecem que a maioria dos mandados será expedida pelo sistema e assinada digitalmente pelo Escrivão (Diretor de Cartório), agilizando o procedimento."
    },
    {
      enunciado: "A movimentação de processos para a publicação no Diário de Justiça Eletrônico (DJE) deverá ocorrer no prazo máximo de:",
      alternativas: ["24 horas", "48 horas", "3 dias", "5 dias"],
      correta: 2,
      explicacao: "As Normas da CGJ são rigorosas com os prazos. Os atos que dependem de publicação devem ser encaminhados ao DJE em no máximo 3 dias para garantir a celeridade processual."
    },
    {
      enunciado: "A consulta aos autos de processos que tramitam em segredo de justiça é permitida:",
      alternativas: ["A qualquer pessoa, desde que não retire os autos de cartório.", "Apenas às partes e a seus procuradores.", "A estagiários de direito, mesmo sem procuração.", "Apenas aos servidores da unidade judicial."],
      correta: 1,
      explicacao: "O segredo de justiça é uma exceção à regra da publicidade. O acesso aos autos fica restrito às partes envolvidas, seus advogados, defensores públicos e membros do Ministério Público."
    },
    {
      enunciado: "As petições iniciais e intermediárias em processos físicos serão protocoladas e autuadas no prazo de:",
      alternativas: ["até o final do mesmo dia.", "24 horas.", "48 horas.", "3 dias."],
      correta: 1,
      explicacao: "As Normas da Corregedoria estabelecem o prazo de 24 horas para o registro, autuação e identificação de petições, visando a rápida tramitação processual."
    },
    {
      enunciado: "Nos processos físicos, a juntada de petições e documentos será efetuada:",
      alternativas: ["Na ordem cronológica de apresentação.", "Conforme a relevância da matéria.", "A critério do escrivão.", "Apenas após o despacho do juiz."],
      correta: 0,
      explicacao: "Para manter a ordem e a lógica processual, a juntada de documentos deve seguir rigorosamente a ordem cronológica de recebimento no cartório."
    },
    {
      enunciado: "É dever do servidor do ofício de justiça tratar com urbanidade e presteza:",
      alternativas: ["Apenas os juízes e promotores.", "Apenas os advogados e defensores públicos.", "O público em geral, prestando as informações requeridas.", "Apenas as partes do processo."],
      correta: 2,
      explicacao: "As Normas de Serviço da Corregedoria enfatizam o dever de urbanidade (cortesia) e presteza de todos os servidores para com o público em geral, advogados, partes, etc."
    },
    {
      enunciado: "Os livros obrigatórios dos ofícios de justiça, como o Livro de Visitas e Correições, devem ser:",
      alternativas: ["Arquivados após um ano de uso.", "Abertos, numerados, autenticados e encerrados pelo Escrivão Judicial.", "Guardados em cofre.", "De livre acesso a qualquer pessoa."],
      correta: 1,
      explicacao: "O Escrivão Judicial (Diretor) é o responsável pela regularidade dos livros cartorários, incluindo a sua abertura e encerramento formal."
    },
    {
      enunciado: "A expedição de certidões sobre os atos e termos dos processos compete:",
      alternativas: ["Ao Juiz Corregedor.", "Ao Oficial de Justiça.", "Ao Escrivão Judicial do feito.", "Ao distribuidor."],
      correta: 2,
      explicacao: "O Escrivão, como chefe do cartório, é o servidor com fé pública responsável por certificar a existência e o conteúdo dos atos processuais."
    },
    {
      enunciado: "Os ofícios de justiça devem manter afixado em local visível e de fácil acesso ao público:",
      alternativas: ["A foto do Juiz Titular.", "O horário de atendimento e os nomes dos servidores.", "Uma lista de advogados da comarca.", "Os valores das custas processuais."],
      correta: 1,
      explicacao: "Para garantir a transparência e a organização do atendimento, as Normas da Corregedoria determinam a fixação do horário de atendimento ao público."
    },
    {
      enunciado: "Na contagem dos prazos processuais nos ofícios de justiça, exclui-se:",
      alternativas: ["O dia do começo e inclui-se o do vencimento.", "O dia do vencimento e inclui-se o do começo.", "O dia do começo e o do vencimento.", "Apenas os domingos."],
      correta: 0,
      explicacao: "Esta é a regra geral de contagem de prazos estabelecida no Código de Processo Civil e seguida pelas Normas da Corregedoria."
    },
    {
      enunciado: "Em processos com mais de 200 folhas, o escrivão deverá:",
      alternativas: ["Arquivar o processo imediatamente.", "Encerrar o volume e abrir o seguinte, lavrando o respectivo termo.", "Digitalizar todo o processo.", "Comunicar o Tribunal de Justiça."],
      correta: 1,
      explicacao: "Para facilitar o manuseio dos autos físicos, as Normas preveem que eles sejam divididos em volumes de até 200 folhas cada."
    },
    {
      enunciado: "A baixa definitiva de um processo no sistema informatizado ocorre quando:",
      alternativas: ["A sentença é proferida.", "O processo é arquivado provisoriamente.", "O processo transita em julgado e é arquivado definitivamente.", "O réu apresenta a contestação."],
      correta: 2,
      explicacao: "A baixa definitiva significa o encerramento total do processo naquela instância, o que só ocorre após o trânsito em julgado e o cumprimento de todas as formalidades para o arquivamento final."
    },
    {
      enunciado: "Os atos ordinatórios, que não possuem conteúdo decisório e visam apenas dar andamento ao processo, podem ser praticados:",
      alternativas: ["Apenas pelo Juiz.", "Pelo Escrivão Judicial, de ofício ou a requerimento.", "Exclusivamente pelo Oficial de Justiça.", "Pelo estagiário do cartório."],
      correta: 1,
      explicacao: "O Código de Processo Civil e as Normas da Corregedoria autorizam o Escrivão a praticar atos de mero expediente, sem carga decisória, para impulsionar o processo."
    },
    {
      enunciado: "É vedado ao oficial de justiça, no cumprimento de um mandado:",
      alternativas: ["Utilizar o transporte público.", "Solicitar auxílio de força policial, se necessário.", "Exercer atividade de natureza particular.", "Certificar o ocorrido de forma detalhada."],
      correta: 2,
      explicacao: "As Normas de Serviço são claras ao proibir que os servidores, incluindo oficiais de justiça, utilizem o tempo e os recursos do serviço público para atividades particulares."
    },
    {
      enunciado: "A devolução de mandados cumpridos pelos oficiais de justiça deve ocorrer no prazo de:",
      alternativas: ["24 horas.", "3 dias.", "10 dias.", "20 dias."],
      correta: 3,
      explicacao: "As Normas da CGJ estabelecem um prazo de 20 dias para que os oficiais de justiça devolvam os mandados devidamente cumpridos ao cartório."
    },
    {
      enunciado: "A inutilização de autos e documentos pelo Tribunal de Justiça deve ser precedida de:",
      alternativas: ["Autorização do Ministério Público.", "Publicação de edital de ciência para os interessados.", "Decisão do Supremo Tribunal Federal.", "Venda em leilão público."],
      correta: 1,
      explicacao: "Para garantir que as partes possam resgatar documentos de seu interesse, a inutilização (eliminação) de autos arquivados é sempre precedida de um edital que dá ciência do ato."
    },
    {
      enunciado: "A carta precatória expedida para outra comarca deve ser:",
      alternativas: ["Cumprida pelo próprio juiz deprecante.", "Enviada diretamente pela parte interessada.", "Distribuída e fiscalizada pelo juízo deprecado.", "Publicada no Diário Oficial da União."],
      correta: 2,
      explicacao: "O juízo que recebe a carta precatória (deprecado) é o responsável por sua distribuição, cumprimento e devolução ao juízo de origem (deprecante)."
    },
    {
        enunciado: "João, escrevente, recebeu notícia de que a Vara passará por uma correição ordinária. É correto concluir que:",
        alternativas: [
            "consistirá em fiscalização precedida de prévio anúncio para verificação da regularidade.",
            "a execução foi precedida de Edital publicado no Diário Oficial com pelo menos quinze dias de antecedência...",
            "a ata será encaminhada à Corregedoria em até 15 dias, podendo atingir apenas parte dos serviços.",
            "trata-se de fiscalização prevista, cuja ata será encaminhada à Corregedoria em até 60 dias.",
            "a correição será realizada em janeiro e caberá ao Juiz Corregedor Permanente..."
        ],
        correta: 3,
        explicacao: "A correição ordinária é a fiscalização prevista e efetivada pelo Juiz Corregedor Permanente, em regra, uma vez por ano. A ata deve ser encaminhada à Corregedoria Geral da Justiça em até 60 dias (Cap. II, Seção II, item 7)."
    },
    {
        enunciado: "Mário, advogado, dirigiu-se ao gabinete de um Magistrado para despachar um pedido em processo físico. É correto afirmar que:",
        alternativas: [
            "a petição somente poderá ser juntada diretamente no processo pelo ofício caso contenha nova procuração...",
            "o advogado deverá protocolar, previamente, a petição no setor próprio...",
            "a petição poderá ser juntada diretamente, salvo se vier acompanhada de objeto de inviável entranhamento...",
            "a petição poderá ser juntada ao processo, sem prévio protocolo, caso o juiz tenha dispensado de forma fundamentada e expressa...",
            "caso haja a anotação de urgência, o ofício deverá, independentemente de protocolo, juntá-la..."
        ],
        correta: 3,
        explicacao: "A regra é o protocolo prévio. Contudo, as Normas da Corregedoria permitem que o juiz, em casos de urgência e para evitar perecimento de direito, determine a juntada da petição diretamente no ofício de justiça, dispensando o protocolo (Cap. II, Seção VII, item 48)."
    },
    {
        enunciado: "Sobre o protocolo de petições intermediárias em processos eletrônicos, assinale a alternativa correta.",
        alternativas: [
            "Na hipótese de materialização do processo, passarão a ser admitidas petições em meio físico.",
            "Não se admite, nos Foros Digitais, o protocolo integrado de petições em papel dirigidas a processos físicos...",
            "Em caso de indisponibilidade do sistema, o Setor de Protocolo não pode receber petições em papel...",
            "Em caso de recebimento indevido de petição física, o Setor de Protocolo de origem promoverá a digitalização...",
            "Caso o juiz defira o recebimento de petição física, a parte a apresentará no Protocolo e também fará o protocolo eletrônico em 5 dias..."
        ],
        correta: 0,
        explicacao: "O processo eletrônico pode, excepcionalmente, ser materializado (impresso). Nesse período, as petições e atos passam a ser físicos. Quando a tramitação eletrônica é retomada, volta a ser proibido o peticionamento físico (Cap. XI, Seção IV, item 3)."
    },
    {
        enunciado: "A solicitação e o recebimento de informações da Receita Federal do Brasil relacionadas a endereço ou situação econômico-financeira da parte serão realizados pelo sistema:",
        alternativas: ["BacenJud", "e-SAJ", "PJe", "ICP-Brasil", "Infojud"],
        correta: 4,
        explicacao: "O Infojud é o sistema que interliga o Poder Judiciário e a Receita Federal, permitindo o acesso a informações cadastrais e econômico-fiscais das partes para subsidiar decisões judiciais."
    },
    {
        enunciado: "A respeito da tramitação de processos eletrônicos, é correto afirmar que:",
        alternativas: [
            "os documentos produzidos de forma eletrônica serão assinados e rubricados.",
            "o acesso ao sistema será realizado pelo sítio eletrônico do TJSP, sendo vedado o uso de outros meios.",
            "é de exclusiva responsabilidade do titular de certificação digital o uso e o sigilo da chave privada...",
            "os advogados não vinculados a processo poderão acessar todos os atos, incluídos os em sigilo ou segredo de justiça.",
            "para a elaboração dos documentos, serão utilizados os modelos institucionais, autorizados pelo Diretor da unidade."
        ],
        correta: 2,
        explicacao: "As Normas da Corregedoria (Cap. XI, Seção II, item 8º) estabelecem que o titular do certificado digital é o único responsável por seu uso e sigilo, não podendo alegar uso indevido por terceiros. É uma regra de segurança e responsabilidade."
    }
  ],

  // ===================================================
  // BLOCO III - CONHECIMENTOS GERAIS
  // ===================================================
  matematica: [
    {
      enunciado: "O preço à vista de um celular é de R$ 1.280,00. A prazo, em 10 prestações mensais fixas, cada prestação será de R$ 153,60. O acréscimo que o comprador pagará, em relação ao preço à vista, corresponderá a:",
      alternativas: ["16%", "18%", "15%", "20%", "12%"],
      correta: 3,
      explicacao: "O valor total a prazo é 10 * R$ 153,60 = R$ 1.536,00. O acréscimo é R$ 1.536,00 - R$ 1.280,00 = R$ 256,00. Para saber o percentual, dividimos o acréscimo pelo valor à vista: (256 / 1280) * 100 = 20%."
    },
    {
      enunciado: "Rafaela prestou um concurso com as seguintes provas e pesos: matemática (peso 1), legislação (peso 3) e português (peso 4). Ela tirou 6 em português e na de matemática tirou o dobro da nota de legislação. Se a média ponderada final foi 5, sua nota em matemática superou a de português em:",
      alternativas: ["0,5 ponto", "0,4 ponto", "0,2 ponto", "0,6 ponto", "0,8 ponto"],
      correta: 1,
      explicacao: "Seja L a nota de legislação e M a de matemática. M = 2L. Média ponderada = [(M*1) + (L*3) + (6*4)] / (1+3+4) = 5. Substituindo M: [2L + 3L + 24] / 8 = 5 => 5L + 24 = 40 => 5L = 16 => L = 3,2. Logo, M = 2 * 3,2 = 6,4. A diferença para a nota de português é 6,4 - 6 = 0,4 ponto."
    },
    {
        enunciado: "A figura indica um estacionamento retangular PARK, cujo comprimento PA mede a metade da largura AR. A área da rotatória circular é de 12 m². Se a área útil para veículos é de 500 m², o perímetro do retângulo PARK é:",
        alternativas: ["84 m", "102 m", "78 m", "90 m", "96 m"],
        correta: 4,
        explicacao: "A área total do estacionamento é a área útil mais a área da rotatória: 500 + 12 = 512 m². Seja a largura AR = 2x, o comprimento PA = x. A área total é x * 2x = 2x². Então, 2x² = 512 => x² = 256 => x = 16. A largura é 2*16 = 32m e o comprimento é 16m. O perímetro é 2 * (16 + 32) = 2 * 48 = 96 m."
    },
    {
      enunciado: "Uma fórmula para saber se vale a pena álcool ou gasolina é dividir o preço do etanol pelo da gasolina. Se o resultado for > 0,7, gasolina é melhor. Renan abasteceu com etanol, sendo que a gasolina custava R$ 5,10. O preço do litro de etanol, necessariamente, era:",
      alternativas: ["maior do que R$ 4,40", "entre R$ 3,50 e R$ 3,57", "menor do que R$ 3,50", "entre R$ 3,57 e R$ 4,40", "menor do que R$ 3,57"],
      correta: 4,
      explicacao: "Para ser mais vantajoso abastecer com etanol, o resultado da divisão (Etanol / Gasolina) deve ser menor que 0,7. Etanol / 5,10 < 0,7 => Etanol < 0,7 * 5,10 => Etanol < 3,57. Portanto, o preço do etanol era, necessariamente, menor que R$ 3,57."
    },
    {
      enunciado: "Um capital de R$ 10.000,00 foi aplicado a juros simples de 1,5% ao mês durante um ano. Qual o montante final?",
      alternativas: ["R$ 11.500,00", "R$ 11.800,00", "R$ 12.000,00", "R$ 1.800,00"],
      correta: 1,
      explicacao: "Juros = Capital * taxa * tempo. J = 10000 * 0,015 * 12. J = 150 * 12 = R$ 1.800,00. O montante é Capital + Juros, ou seja, 10000 + 1800 = R$ 11.800,00."
    },
    {
      enunciado: "Um processo que tinha 200 páginas teve 30% de suas páginas digitalizadas. Quantas páginas ainda faltam para digitalizar?",
      alternativas: ["60", "70", "140", "170"],
      correta: 2,
      explicacao: "Foram digitalizadas 30% de 200, ou seja, 0,30 * 200 = 60 páginas. Faltam digitalizar 200 - 60 = 140 páginas."
    },
    {
      enunciado: "Se 4 servidores arquivam 120 processos em 3 dias, quantos dias 6 servidores levarão para arquivar 240 processos?",
      alternativas: ["2 dias", "4 dias", "6 dias", "8 dias"],
      correta: 1,
      explicacao: "Regra de três composta. Dias é inversamente proporcional a servidores e diretamente proporcional a processos. Equação: (3/x) = (6/4) * (120/240). (3/x) = (3/2) * (1/2) => 3/x = 3/4 => x = 4 dias."
    },
    {
      enunciado: "O perímetro de um terreno retangular é de 60 metros. Se o comprimento é o dobro da largura, qual é a área do terreno?",
      alternativas: ["150 m²", "200 m²", "225 m²", "250 m²"],
      correta: 1,
      explicacao: "Perímetro = 2*(L+C). Sabemos que C=2L. Então 60 = 2*(L+2L) => 60 = 2*(3L) => 60 = 6L => L=10m. Se L=10m, C=20m. A área é L*C = 10*20 = 200 m²."
    },
    {
      enunciado: "Convertendo o número decimal 0,75 em uma fração irredutível, obtemos:",
      alternativas: ["75/10", "3/4", "1/4", "7/5"],
      correta: 1,
      explicacao: "0,75 é o mesmo que 75/100. Simplificando a fração por 25 (dividindo o numerador e o denominador por 25), obtemos 3/4."
    },
    {
      enunciado: "Se um litro (1000 cm³) de água enche um recipiente cúbico, qual a medida da aresta desse cubo?",
      alternativas: ["1 cm", "10 cm", "100 cm", "1000 cm"],
      correta: 1,
      explicacao: "O volume de um cubo é aresta ao cubo (a³). Se o volume é 1000 cm³, então a³ = 1000. A raiz cúbica de 1000 é 10. Portanto, a aresta mede 10 cm."
    },
    {
      enunciado: "Uma equipe de 5 servidores conclui uma tarefa em 8 dias. Se a equipe fosse reduzida para 4 servidores, em quantos dias a mesma tarefa seria concluída?",
      alternativas: ["6,4 dias", "9 dias", "10 dias", "12 dias"],
      correta: 2,
      explicacao: "Trata-se de uma regra de três inversa. Menos servidores, mais dias. 5 servidores --- 8 dias. 4 servidores --- x dias. 4x = 5*8 => 4x = 40 => x = 10 dias."
    },
    {
      enunciado: "Qual o valor de x na equação 3x + 7 = 22?",
      alternativas: ["3", "4", "5", "6"],
      correta: 2,
      explicacao: "Para resolver a equação, isolamos o x: 3x = 22 - 7 => 3x = 15 => x = 15 / 3 => x = 5."
    },
    {
      enunciado: "Um servidor recebe um salário de R$ 5.000,00 e gasta 20% com aluguel e 30% com alimentação. Quanto sobra do seu salário?",
      alternativas: ["R$ 2.000,00", "R$ 2.500,00", "R$ 3.000,00", "R$ 1.500,00"],
      correta: 1,
      explicacao: "O total de gastos é 20% + 30% = 50% do salário. 50% de R$ 5.000,00 é a metade, ou seja, R$ 2.500,00. Sobram os outros 50%, que são R$ 2.500,00."
    },
    {
      enunciado: "O Máximo Divisor Comum (MDC) entre 24 e 36 é:",
      alternativas: ["6", "8", "12", "24"],
      correta: 2,
      explicacao: "Fatorando os números: 24 = 2³ * 3. 36 = 2² * 3². O MDC é o produto dos fatores comuns com seus menores expoentes: 2² * 3 = 4 * 3 = 12."
    },
    {
      enunciado: "Uma viagem de 300 km foi feita a uma velocidade média de 60 km/h. Quanto tempo durou a viagem?",
      alternativas: ["3 horas", "4 horas", "5 horas", "6 horas"],
      correta: 2,
      explicacao: "Tempo = Distância / Velocidade. Tempo = 300 km / 60 km/h = 5 horas."
    },
    {
      enunciado: "Se 15% de um número é 45, qual é o número?",
      alternativas: ["150", "200", "300", "450"],
      correta: 2,
      explicacao: "Se 15% (ou 0,15) de um número (N) é 45, a equação é 0,15 * N = 45. Logo, N = 45 / 0,15 = 300."
    },
    {
      enunciado: "Um terreno quadrado tem área de 144 m². Qual é o seu perímetro?",
      alternativas: ["12 m", "24 m", "36 m", "48 m"],
      correta: 3,
      explicacao: "A área de um quadrado é Lado². Se a área é 144, o lado é a raiz quadrada de 144, que é 12 m. O perímetro é a soma dos 4 lados, ou 4 * Lado. Perímetro = 4 * 12 = 48 m."
    },
    {
      enunciado: "Em uma repartição, 2/5 dos servidores são homens. Se há 21 mulheres, qual o total de servidores?",
      alternativas: ["30", "35", "42", "49"],
      correta: 1,
      explicacao: "Se 2/5 são homens, então 3/5 são mulheres. Se 3/5 do total (T) corresponde a 21 mulheres, temos a equação (3/5)*T = 21. Logo, T = (21*5)/3 = 105/3 = 35 servidores."
    },
    {
      enunciado: "Um valor de R$ 800,00 foi reduzido para R$ 680,00. Qual foi o percentual de desconto?",
      alternativas: ["10%", "12%", "15%", "20%"],
      correta: 2,
      explicacao: "O valor do desconto foi 800 - 680 = R$ 120,00. Para achar o percentual, dividimos o desconto pelo valor original: (120 / 800) * 100 = 0,15 * 100 = 15%."
    },
    {
      enunciado: "Três torneiras idênticas enchem um tanque em 9 horas. Se mais duas torneiras idênticas forem abertas, em quanto tempo o tanque ficará cheio?",
      alternativas: ["3,6 horas", "4,5 horas", "5,4 horas", "6 horas"],
      correta: 2,
      explicacao: "Regra de três inversa. Mais torneiras, menos tempo. 3 torneiras --- 9 horas. 5 torneiras --- x horas. 5x = 3*9 => 5x = 27 => x = 5,4 horas."
    }
  ],
  // ===================================================
  // INFORMÁTICA
  // ===================================================
  informatica: [
    {
        enunciado: "Um usuário está com a pasta C:\TEMP aberta no Explorador de Arquivos, que contém apenas o arquivo 'Controle.txt'. Ele pressionou CTRL+Z e o explorador passou a exibir apenas o arquivo 'Projeto.txt'. Assinale a alternativa correta.",
        alternativas: [
            "O arquivo Projeto.txt havia sido renomeado para Controle.txt.",
            "O arquivo Controle.txt foi enviado para a Lixeira.",
            "O arquivo Controle.txt foi configurado como oculto.",
            "O arquivo Projeto.txt foi recuperado da Lixeira.",
            "O arquivo Controle.txt foi apagado em definitivo."
        ],
        correta: 0,
        explicacao: "O atalho CTRL+Z desfaz a última ação. Se ao pressioná-lo, 'Controle.txt' sumiu e 'Projeto.txt' apareceu, a última ação desfeita foi a renomeação de 'Projeto.txt' para 'Controle.txt'."
    },
    {
        enunciado: "Um usuário copiou arquivo1.txt (CTRL+C), depois copiou arquivo2.txt (CTRL+C), depois recortou arquivo3.txt (CTRL+X) e finalmente recortou arquivo4.txt (CTRL+X). Ao pressionar CTRL+V em outra pasta, qual(is) arquivo(s) será(ão) colados?",
        alternativas: [
            "arquivo1.txt, arquivo2.txt, arquivo3.txt e arquivo4.txt.",
            "arquivo4.txt, apenas.",
            "arquivo1.txt e arquivo2.txt, apenas.",
            "arquivo1.txt, apenas.",
            "arquivo3.txt e arquivo4.txt, apenas."
        ],
        correta: 1,
        explicacao: "A área de transferência do Windows armazena apenas a última operação de copiar ou recortar. A última ação foi recortar (CTRL+X) o 'arquivo4.txt'. Portanto, apenas ele será colado."
    },
    {
        enunciado: "No Microsoft Word 365, o cursor está ao final do texto 'Tribunal de Justiça'. Se o usuário clicar nos ícones Negrito e Itálico, e digitar uma palavra, essa palavra estará formatada como:",
        alternativas: ["itálico, apenas.", "negrito e itálico, apenas.", "sublinhado, apenas.", "negrito, apenas.", "sem nenhuma formatação."],
        correta: 1,
        explicacao: "O texto original não tem formatação. Ao final dele, o usuário ativou as formatações de Negrito e Itálico. Qualquer texto digitado a partir daquele ponto herdará essas duas formatações ativas."
    },
    {
        enunciado: "Na URL https://www.meusite.com.br/descontos%20especiais.html, o trecho '%20' representa:",
        alternativas: ["um espaço em branco.", "um traço.", "um site não seguro.", "um site marcado como Favorito.", "um sinal de adição."],
        correta: 0,
        explicacao: "Em URLs, o caractere de espaço não é permitido. O código '%20' é a representação padronizada (URL encoding) para o caractere de espaço."
    },
    {
        enunciado: "Na imagem do OneDrive, o ícone de nuvem azul significa que o arquivo:",
        alternativas: ["Está sincronizado e disponível apenas online.", "Está sendo sincronizado no momento.", "Está sempre disponível offline neste dispositivo.", "Ocorreu um erro de sincronização."],
        correta: 0,
        explicacao: "O ícone de nuvem indica que o arquivo está salvo no OneDrive (nuvem), mas não ocupa espaço no disco local do computador. Ele só é baixado quando você o abre."
    },
    {
      enunciado: "Qual atalho de teclado é usado no Windows para alternar entre as janelas abertas?",
      alternativas: ["Ctrl + Tab", "Alt + Tab", "Windows + Tab", "Ctrl + Alt + Del"],
      correta: 1,
      explicacao: "Alt + Tab é o atalho clássico do Windows para alternar rapidamente entre todos os programas e janelas que estão em execução."
    },
    {
      enunciado: "No Microsoft Word, qual é a principal finalidade da ferramenta 'Controle de Alterações'?",
      alternativas: ["Corrigir automaticamente erros de digitação.", "Registrar e exibir as edições feitas em um documento.", "Alterar o idioma do corretor ortográfico.", "Inserir uma tabela de alterações no final do texto."],
      correta: 1,
      explicacao: "O 'Controle de Alterações' (Track Changes) é uma ferramenta essencial para trabalho colaborativo, pois rastreia todas as inserções, exclusões e alterações de formatação, permitindo que outros revisores aceitem ou rejeitem as mudanças."
    },
    {
      enunciado: "O que é um 'cookie' no contexto da navegação na internet?",
      alternativas: ["Um tipo de vírus de computador.", "Um pequeno arquivo de texto armazenado no computador pelo navegador para guardar informações sobre o usuário.", "Um programa que bloqueia anúncios indesejados.", "Uma senha temporária para acesso a redes Wi-Fi."],
      correta: 1,
      explicacao: "Cookies são usados pelos sites para armazenar informações no seu navegador, como preferências de idioma, itens em um carrinho de compras ou dados de login, para personalizar a experiência de navegação."
    },
    {
      enunciado: "No Excel, qual função é usada para calcular a média de um intervalo de números?",
      alternativas: ["=MEDIA(A1:A10)", "=MED(A1:A10)", "=SOMA(A1:A10)/10", "=MEIO(A1:A10)"],
      correta: 0,
      explicacao: "A função correta e direta para calcular a média aritmética de um intervalo de células no Excel em português é =MÉDIA()."
    },
    {
      enunciado: "Qual das seguintes opções é um exemplo de armazenamento em nuvem (cloud storage)?",
      alternativas: ["Pen Drive", "HD Externo", "Google Drive", "CD-ROM"],
      correta: 2,
      explicacao: "Armazenamento em nuvem refere-se a salvar dados em servidores remotos acessíveis pela internet. Google Drive, OneDrive e Dropbox são exemplos populares. Os outros são mídias de armazenamento físico."
    },
    {
      enunciado: "O atalho CTRL + F no Microsoft Word e em navegadores de internet serve para:",
      alternativas: ["Formatar o texto em negrito.", "Salvar o arquivo.", "Localizar uma palavra ou trecho no documento.", "Fechar a janela atual."],
      correta: 2,
      explicacao: "CTRL + F (de 'Find', ou 'Localizar') abre uma caixa de pesquisa que permite encontrar rapidamente palavras ou frases específicas no texto."
    },
    {
        enunciado: "No Microsoft Excel, a função =CONT.SE(A1:A10; '>50') faz o quê?",
        alternativas: ["Soma todos os valores maiores que 50 no intervalo.", "Conta quantas células no intervalo têm valores maiores que 50.", "Verifica se a célula A1 é maior que 50.", "Retorna o maior valor acima de 50 no intervalo."],
        correta: 1,
        explicacao: "A função CONT.SE serve para contar o número de células dentro de um intervalo que atendem a um determinado critério. Neste caso, o critério é ser maior que 50."
    },
    {
        enunciado: "No Microsoft Outlook, para que serve o campo 'Cco' (Cópia Carbono Oculta)?",
        alternativas: ["Para enviar uma cópia da mensagem para o chefe do remetente.", "Para arquivar a mensagem automaticamente.", "Para enviar uma cópia da mensagem a um destinatário sem que os outros saibam.", "Para criptografar a mensagem."],
        correta: 2,
        explicacao: "O campo Cco (ou Bcc em inglês) envia uma cópia da mensagem para os destinatários listados, mas os nomes deles ficam ocultos para todos os outros destinatários (incluindo os que estão em Para, Cc e Cco)."
    },
    {
        enunciado: "Qual o atalho de teclado no Windows para abrir o Gerenciador de Tarefas?",
        alternativas: ["Ctrl + Alt + T", "Ctrl + Shift + Esc", "Alt + F4", "Windows + G"],
        correta: 1,
        explicacao: "Ctrl + Shift + Esc é o atalho direto para abrir o Gerenciador de Tarefas, útil para monitorar processos e fechar aplicativos que não estão respondendo."
    },
    {
        enunciado: "No Microsoft Word, a 'Quebra de Página' serve para:",
        alternativas: ["Dividir o documento em duas colunas.", "Apagar todo o conteúdo da página.", "Forçar o texto subsequente a começar no topo de uma nova página.", "Criar um sumário automaticamente."],
        correta: 2,
        explicacao: "A inserção de uma Quebra de Página (Ctrl + Enter) finaliza a página atual e move o cursor e todo o texto seguinte para o início da página seguinte, independentemente de quanto espaço sobrou na página atual."
    },
    {
        enunciado: "O que é 'phishing'?",
        alternativas: ["Um tipo de hardware de rede.", "Um vírus que criptografa arquivos e pede resgate.", "Uma técnica para proteger senhas com criptografia.", "Uma tentativa de fraude online para obter informações confidenciais se passando por uma entidade confiável."],
        correta: 3,
        explicacao: "Phishing é uma forma de ataque cibernético que usa engenharia social (e-mails, mensagens falsas) para enganar as pessoas e fazer com que revelem senhas, números de cartão de crédito e outras informações sensíveis."
    },
    {
        enunciado: "No Excel, se a célula A1 contém o valor 10 e a B1 contém 20, qual será o resultado da fórmula =A1&B1?",
        alternativas: ["30", "1020", "-10", "ERRO"],
        correta: 1,
        explicacao: "O operador '&' no Excel é usado para concatenação, ou seja, para juntar textos. Ele tratará os números 10 e 20 como texto e os unirá, resultando na string '1020'."
    },
    {
        enunciado: "Para garantir a autenticidade e a integridade de um documento eletrônico, utiliza-se a:",
        alternativas: ["Assinatura digital", "Criptografia de ponta-a-ponta", "Senha de acesso", "Compactação de arquivo"],
        correta: 0,
        explicacao: "A assinatura digital, baseada em criptografia de chaves assimétricas, é a tecnologia que garante a autoria (quem assinou), a integridade (que não foi alterado) e o não-repúdio (o autor não pode negar a autoria) de um documento digital."
    },
    {
        enunciado: "No Microsoft Teams, um 'Canal' dentro de uma 'Equipe' serve para:",
        alternativas: ["Fazer uma chamada de vídeo privada com um membro.", "Organizar conversas e arquivos por tópicos, projetos ou departamentos específicos.", "Excluir a equipe permanentemente.", "Criar uma nova equipe."],
        correta: 1,
        explicacao: "Os canais são seções dentro de uma equipe dedicadas a organizar o trabalho e a comunicação. Cada canal tem suas próprias postagens e aba de arquivos, ajudando a manter os assuntos separados e organizados."
    },
    {
        enunciado: "O atalho de teclado CTRL + A, na maioria dos editores de texto e no Windows Explorer, serve para:",
        alternativas: ["Abrir um novo arquivo.", "Salvar o arquivo atual.", "Substituir texto.", "Selecionar todo o conteúdo."],
        correta: 3,
        explicacao: "CTRL + A (de 'All', ou 'Tudo') é o comando universal para selecionar todo o texto em um documento, todos os arquivos em uma pasta, ou todo o conteúdo de uma página web."
    }
  ],
  // ===================================================
  // RACIOCÍNIO LÓGICO
  // ===================================================
  raciocinio_logico: [
    {
      enunciado: "Todo escrevente é dedicado. João é escrevente. Logo:",
      alternativas: ["João não é dedicado.", "Todo dedicado é escrevente.", "João é dedicado.", "Alguns escreventes não são dedicados."],
      correta: 2,
      explicacao: "Isso é um silogismo categórico clássico. Se a premissa maior afirma que TODOS do grupo A possuem a característica B, e a premissa menor afirma que um indivíduo pertence ao grupo A, a conclusão lógica é que esse indivíduo possui a característica B."
    },
    {
      enunciado: "Qual é a negação da proposição 'Todos os processos são digitais'?",
      alternativas: ["Nenhum processo é digital.", "Todos os processos são físicos.", "Pelo menos um processo não é digital.", "Nenhum processo é físico."],
      correta: 2,
      explicacao: "A negação de uma proposição universal afirmativa ('Todo A é B') é uma proposição particular negativa ('Algum A não é B' ou 'Pelo menos um A não é B'). Basta um único processo que não seja digital para que a afirmação original seja falsa."
    },
    {
      enunciado: "A negação da proposição 'O processo é físico e o prazo é curto' é:",
      alternativas: [
        "O processo não é físico e o prazo não é curto.",
        "Se o processo é físico, então o prazo não é curto.",
        "O processo não é físico ou o prazo não é curto.",
        "O processo é físico ou o prazo é curto."
      ],
      correta: 2,
      explicacao: "Pelas Leis de De Morgan, a negação de uma conjunção (P e Q) é a disjunção das negações (~P ou ~Q). Portanto, nega-se a primeira parte, troca-se 'e' por 'ou', e nega-se a segunda parte."
    },
    {
      enunciado: "Considere a afirmação: 'Se estudo, então sou aprovado'. Uma afirmação logicamente equivalente é:",
      alternativas: [
        "Se não sou aprovado, então não estudo.",
        "Se sou aprovado, então estudo.",
        "Estudo e não sou aprovado.",
        "Não estudo e sou aprovado."
      ],
      correta: 0,
      explicacao: "Uma condicional (Se P, então Q) tem como principal equivalência a sua contrapositiva, que é formada negando-se as duas proposições e invertendo-as (Se não Q, então não P)."
    },
    {
      enunciado: "Observe a sequência: 2, 5, 10, 17, 26, ... Qual é o próximo número?",
      alternativas: ["35", "36", "37", "38"],
      correta: 2,
      explicacao: "A lógica da sequência é o quadrado da posição mais um: Posição 1: (1² + 1 = 2). Posição 2: (2² + 1 = 5). Posição 3: (3² + 1 = 10). A próxima é a posição 6: (6² + 1 = 37)."
    },
    {
        enunciado: "Se o servidor é eficiente, então o processo anda rápido. O processo não anda rápido. Portanto, pode-se concluir que:",
        alternativas: ["O servidor é eficiente.", "O servidor não é eficiente.", "Se o processo anda rápido, o servidor é eficiente.", "O servidor pode ou não ser eficiente."],
        correta: 1,
        explicacao: "Trata-se de um argumento lógico válido chamado Modus Tollens. A estrutura é: Se P -> Q, e temos ~Q (a negação da consequência), então a conclusão é ~P (a negação da causa)."
    },
    {
        enunciado: "A afirmação 'Nenhum servidor está de férias' é logicamente equivalente a:",
        alternativas: ["Todos os servidores estão trabalhando.", "Algum servidor está de férias.", "Não é verdade que algum servidor está de férias.", "Todos os servidores não estão de férias."],
        correta: 2,
        explicacao: "A proposição 'Nenhum A é B' é a negação universal da proposição 'Algum A é B'. Dizer que ninguém está de férias é o mesmo que dizer que é falso que exista alguém de férias."
    },
    {
        enunciado: "Considere a proposição 'Ana é escrevente ou Bruno é oficial'. A negação dessa proposição é:",
        alternativas: ["Se Ana não é escrevente, então Bruno não é oficial.", "Ana não é escrevente e Bruno não é oficial.", "Ana é escrevente e Bruno não é oficial.", "Ana não é escrevente ou Bruno não é oficial."],
        correta: 1,
        explicacao: "Pelas Leis de De Morgan, a negação de uma disjunção (P ou Q) é a conjunção das negações (~P e ~Q). Nega-se a primeira parte, troca-se 'ou' por 'e', e nega-se a segunda parte."
    },
    {
      enunciado: "Se chove, então o pátio molha. O pátio não molhou. Logo:",
      alternativas: ["Choveu.", "Não choveu.", "Pode ter chovido.", "O pátio está coberto."],
      correta: 1,
      explicacao: "Este é um exemplo clássico do argumento lógico válido chamado Modus Tollens. Se a consequência ('o pátio molha') é negada, a causa ('chove') também deve ser negada. Se P -> Q, e temos ~Q, então concluímos ~P."
    },
    {
      enunciado: "A negação da proposição 'Algum servidor não é concursado' é:",
      alternativas: ["Nenhum servidor é concursado.", "Todo servidor é concursado.", "Algum servidor é concursado.", "Nem todo servidor é concursado."],
      correta: 1,
      explicacao: "A negação de uma proposição particular negativa ('Algum A não é B') é uma proposição universal afirmativa ('Todo A é B')."
    },
    {
      enunciado: "Qual das seguintes proposições é uma contradição?",
      alternativas: ["Se o processo é urgente, ele é urgente.", "O processo é físico ou não é físico.", "O processo é urgente e não é urgente.", "O processo é físico e digital."],
      correta: 2,
      explicacao: "Uma contradição é uma proposição que é sempre falsa, independentemente dos valores lógicos de seus componentes. A forma 'P e não P' (afirmar e negar a mesma coisa simultaneamente) é a estrutura de uma contradição."
    },
    {
      enunciado: "Se todo A é B e algum C é A, então pode-se concluir que:",
      alternativas: ["Todo C é B.", "Nenhum C é B.", "Algum C é B.", "Todo B é C."],
      correta: 2,
      explicacao: "Silogismo categórico. Se todo o conjunto A está contido em B, e uma parte do conjunto C está contida em A, então essa mesma parte de C também deve estar contida em B."
    },
    {
      enunciado: "A proposição 'Se o réu é culpado, então ele será condenado' é falsa. Sendo assim, é verdade que:",
      alternativas: ["O réu não é culpado e não será condenado.", "O réu é culpado e não será condenado.", "O réu não é culpado e será condenado.", "Se o réu não é culpado, então não será condenado."],
      correta: 1,
      explicacao: "Uma condicional (Se P, então Q) só é falsa em um único caso: quando o antecedente (P) é verdadeiro e o consequente (Q) é falso. É o famoso 'Vera Fischer é Falsa'."
    },
    {
      enunciado: "Em um grupo de servidores, sabe-se que todos os que estudam Direito são analistas. Como nem todos os analistas estudam Direito, pode-se concluir que:",
      alternativas: ["Todo analista estuda Direito.", "Nenhum analista estuda Direito.", "Existe pelo menos um analista que não estuda Direito.", "Quem não estuda Direito não é analista."],
      correta: 2,
      explicacao: "A informação 'nem todos os analistas estudam Direito' é a definição de uma proposição particular negativa, afirmando a existência de ao menos um elemento do grupo 'analistas' que não pertence ao grupo 'estudam Direito'."
    },
    {
      enunciado: "Observe a sequência: A, C, E, G, ... Qual é a próxima letra?",
      alternativas: ["H", "I", "J", "K"],
      correta: 1,
      explicacao: "A sequência está pulando uma letra do alfabeto a cada termo: A (pula B), C (pula D), E (pula F), G (pula H). A próxima letra é I."
    },
    {
      enunciado: "A negação da proposição 'Eu estudo e não sou aprovado' é:",
      alternativas: ["Eu não estudo e sou aprovado.", "Eu estudo ou sou aprovado.", "Se eu estudo, então sou aprovado.", "Eu não estudo ou sou aprovado."],
      correta: 3,
      explicacao: "Pelas Leis de De Morgan, a negação de (P e ~Q) é (~P ou Q). Nega-se a primeira parte, troca-se 'e' por 'ou', e nega-se a segunda parte (a negação de 'não sou aprovado' é 'sou aprovado')."
    },
    {
      enunciado: "Se é verdade que 'Alguns escreventes são advogados' e 'Todos os advogados são bacharéis em Direito', então é necessariamente verdade que:",
      alternativas: ["Todos os escreventes são bacharéis em Direito.", "Alguns escreventes são bacharéis em Direito.", "Nenhum escrevente é bacharel em Direito.", "Todo bacharel em Direito é escrevente."],
      correta: 1,
      explicacao: "Se um subconjunto de escreventes também pertence ao conjunto dos advogados, e todo o conjunto dos advogados está contido no conjunto dos bacharéis, então aquele subconjunto de escreventes também deve, necessariamente, estar no conjunto dos bacharéis."
    },
    {
      enunciado: "Ana, Beto e Carla são servidores. Um deles é escrevente, outro é oficial e o outro é assistente. Sabe-se que: 1) Ou Ana é escrevente, ou Carla é escrevente. 2) Ou Ana é oficial, ou Beto é assistente. 3) Ou Carla é assistente, ou Beto é assistente. 4) Ou Beto é oficial, ou Carla é oficial. Qual a profissão de Carla?",
      alternativas: ["Escrevente", "Oficial", "Assistente", "Não é possível determinar."],
      correta: 1,
      explicacao: "Analisando as premissas, a única combinação que não gera contradição é: Ana é Escrevente, Beto é Assistente e Carla é Oficial."
    },
    {
      enunciado: "Qual das alternativas contém um argumento válido?",
      alternativas: ["Se chove, a rua molha. A rua molhou, logo choveu.", "Toda ave voa. O pinguim é uma ave, logo o pinguim voa.", "Se o servidor faltou, o trabalho acumulou. O servidor não faltou, logo o trabalho não acumulou.", "Ou o processo é físico, ou é digital. O processo não é físico, logo é digital."],
      correta: 3,
      explicacao: "Este é um silogismo disjuntivo. A estrutura 'Ou P ou Q. Não P. Logo, Q.' é sempre válida. As outras alternativas contêm falácias (Afirmação do Consequente, Falácia Acidental, Negação do Antecedente)."
    },
    {
      enunciado: "Observe a sequência: 1, 1, 2, 3, 5, 8, ... Qual é o próximo número?",
      alternativas: ["11", "12", "13", "14"],
      correta: 2,
      explicacao: "Esta é a Sequência de Fibonacci, onde cada número é a soma dos dois anteriores. O próximo número é 5 + 8 = 13."
    },
    {
        enunciado: "A afirmação equivalente a 'Se o cliente não fica satisfeito ou não volta, então o atendimento não é bom' é:",
        alternativas: [
            "Se o cliente fica satisfeito e volta, então o atendimento não é bom.",
            "Se o atendimento é bom, então o cliente fica satisfeito e volta.",
            "O atendimento é bom e o cliente não fica satisfeito.",
            "O atendimento não é bom e o cliente volta."
        ],
        correta: 1,
        explicacao: "Temos a equivalência pela contrapositiva (Se ~Q, então ~P <=> Se P, então Q). A negação de '~A ou ~B' é 'A e B'. A negação de '~C' é 'C'. Portanto, a equivalência é 'Se o atendimento é bom, então o cliente fica satisfeito E volta'."
    },
    {
        enunciado: "A negação lógica da afirmação: 'Há algum amigo que não é leal e adianta acreditar nas pessoas' é:",
        alternativas: [
            "Todos os amigos são leais ou não adianta acreditar nas pessoas.",
            "Nenhum amigo é leal e não adianta acreditar nas pessoas.",
            "Se algum amigo não é leal, então não adianta acreditar nas pessoas.",
            "Todos os amigos são leais e adianta acreditar nas pessoas."
        ],
        correta: 0,
        explicacao: "Pela Lei de De Morgan, a negação de 'P e Q' é '~P ou ~Q'. A negação de 'Algum amigo não é leal' é 'Todos os amigos são leais'. A negação de 'adianta acreditar nas pessoas' é 'não adianta acreditar nas pessoas'. Juntando com 'ou', temos a alternativa A."
    },
    {
        enunciado: "Se é verdade que 'Janice não é desembargadora' e que 'Se Fabiana é técnica, então Gerusa é escrevente', e que 'Se Humberto é juiz, então Gerusa não é escrevente', qual conclusão é necessariamente verdadeira?",
        alternativas: [
            "Se Gerusa é escrevente, Humberto não é juiz.",
            "Fabiana é técnica.",
            "Gerusa não é escrevente.",
            "Humberto é juiz."
        ],
        correta: 0,
        explicacao: "A condicional 'Se Humberto é juiz, então Gerusa não é escrevente' é equivalente à sua contrapositiva: 'Se Gerusa É escrevente, então Humberto NÃO é juiz'. As outras alternativas não podem ser confirmadas como verdadeiras com as informações dadas."
    },
    {
      enunciado: "Observe a sequência de figuras. A 34ª figura terá qual diferença entre quadriláteros com diagonais e sombreados?",
      alternativas: ["9", "13", "10", "12", "11"],
      correta: 4,
      explicacao: "O padrão dos sombreados se repete a cada 4 figuras. 34 dividido por 4 dá resto 2. A 2ª figura tem 1 sombreado. O padrão das diagonais se repete a cada 6. 34 por 6 dá resto 4. A 4ª figura tem 3 com diagonais. A diferença é 3-1 = 2... (Nota: a lógica da questão original da prova é mais complexa, esta é uma simplificação. A resposta correta na prova era 11, baseada em ciclos de 4 e 3)."
    },
    {
        enunciado: "A afirmação 'Se o chão está molhado, então é perigoso andar por ele' é logicamente equivalente a:",
        alternativas: [
            "O chão está molhado e não é perigoso andar por ele.",
            "O chão não está molhado ou é perigoso andar por ele.",
            "Se é perigoso andar por ele, então o chão está molhado.",
            "O chão está molhado ou não é perigoso andar por ele."
        ],
        correta: 1,
        explicacao: "A condicional 'Se P, então Q' é equivalente à disjunção '~P ou Q'. Ou seja, 'nega a primeira OU mantém a segunda'."
    }
  ],
  // ===================================================
  // NOVA MATÉRIA: ATUALIDADES
  // ===================================================
  atualidades: [
    {
      enunciado: "Em 2024, o Brasil sediou a cúpula de qual importante bloco econômico e político, tendo como um dos focos o combate à fome e às desigualdades?",
      alternativas: ["União Europeia", "G20", "BRICS", "Mercosul"],
      correta: 1,
      explicacao: "O Brasil assumiu a presidência do G20 em dezembro de 2023, e a cúpula de líderes ocorreu em 2024, no Rio de Janeiro. A liderança brasileira tem focado em temas como o combate à fome, desenvolvimento sustentável e reforma da governança global."
    },
    {
      enunciado: "A Reforma Tributária sobre o consumo, promulgada no final de 2023, visa unificar impostos em um modelo de IVA. Quais são os dois principais tributos que comporão o IVA Dual?",
      alternativas: ["IR e IOF", "PIS e COFINS", "IPI e ICMS", "CBS e IBS"],
      correta: 3,
      explicacao: "A Reforma Tributária cria o IVA Dual, composto pela Contribuição sobre Bens e Serviços (CBS), de competência federal, e pelo Imposto sobre Bens e Serviços (IBS), de competência compartilhada entre estados e municípios."
    },
    {
      enunciado: "Qual tecnologia emergente tem sido pauta de intensos debates globais sobre regulação, ética e seu impacto no mercado de trabalho?",
      alternativas: ["Computação em nuvem", "Internet das Coisas (IoT)", "Inteligência Artificial (IA) Generativa", "Blockchain"],
      correta: 2,
      explicacao: "A Inteligência Artificial Generativa, popularizada por ferramentas como o ChatGPT e geradores de imagem, dominou as discussões globais devido ao seu potencial disruptivo e aos desafios éticos e de regulamentação que apresenta."
    },
    {
      enunciado: "Qual questão ambiental tem colocado o Brasil em destaque nas negociações climáticas internacionais, especialmente após a retomada de políticas de fiscalização?",
      alternativas: ["Derretimento de geleiras", "Desertificação do sertão nordestino", "Poluição dos rios urbanos", "Proteção da Floresta Amazônica"],
      correta: 3,
      explicacao: "A Amazônia é central para o equilíbrio climático global e para a imagem internacional do Brasil. A política de combate ao desmatamento e de desenvolvimento sustentável para a região é o principal tema ambiental do país no cenário mundial."
    },
    {
      enunciado: "O conflito que se intensificou em 2022 e continua a gerar graves consequências geopolíticas e humanitárias envolve principalmente a invasão de qual país pela Rússia?",
      alternativas: ["Polônia", "Ucrânia", "Finlândia", "Geórgia"],
      correta: 1,
      explicacao: "A guerra na Ucrânia, iniciada pela invasão russa em fevereiro de 2022, continua a ser um dos principais focos de tensão geopolítica global, com impactos na segurança energética, alimentar e nas relações entre as grandes potências."
    },
    {
      enunciado: "Em 2024, qual cidade foi escolhida para sediar os Jogos Olímpicos de Verão?",
      alternativas: ["Los Angeles", "Tóquio", "Madri", "Paris"],
      correta: 3,
      explicacao: "Paris, a capital da França, foi a cidade-sede dos Jogos Olímpicos de 2024, marcando a terceira vez que a cidade hospeda o evento."
    },
    {
      enunciado: "A Lei Geral de Proteção de Dados (LGPD) no Brasil foi inspirada em qual regulamento europeu de privacidade e proteção de dados?",
      alternativas: ["Acordo de Paris", "Tratado de Lisboa", "GDPR (Regulamento Geral sobre a Proteção de Dados)", "Convenção de Schengen"],
      correta: 2,
      explicacao: "A LGPD (Lei nº 13.709/2018) tem forte inspiração na GDPR europeia, estabelecendo regras claras sobre a coleta, armazenamento, tratamento e compartilhamento de dados pessoais."
    },
    {
      enunciado: "Qual crise sanitária global, declarada como pandemia pela OMS em 2020, continuou a ter profundos impactos sociais, econômicos e na saúde pública nos anos seguintes?",
      alternativas: ["Gripe H1N1", "Ebola", "COVID-19", "Zika"],
      correta: 2,
      explicacao: "A pandemia de COVID-19, causada pelo coronavírus SARS-CoV-2, transformou o mundo e seus efeitos, incluindo a vacinação e novas variantes, continuam a ser um tema relevante."
    },
    {
      enunciado: "O programa 'Desenrola Brasil', lançado pelo governo federal, tem como principal objetivo:",
      alternativas: ["Aumentar o crédito para o agronegócio.", "Renegociar dívidas de pessoas físicas.", "Incentivar a compra de veículos novos.", "Financiar a construção de moradias populares."],
      correta: 1,
      explicacao: "O 'Desenrola Brasil' é uma iniciativa para combater o superendividamento, permitindo que pessoas com o nome negativado renegociem suas dívidas com descontos e condições especiais."
    },
    {
      enunciado: "Qual país foi formalmente convidado e se tornou o mais novo membro da OTAN (Organização do Tratado do Atlântico Norte) em 2023 e 2024, em uma resposta direta à instabilidade geopolítica na Europa?",
      alternativas: ["Ucrânia", "Suécia", "Áustria", "Suíça"],
      correta: 1,
      explicacao: "Após a Finlândia em 2023, a Suécia completou seu processo de adesão e tornou-se o 32º membro da OTAN em 2024, abandonando sua longa política de neutralidade militar."
    },
    {
      enunciado: "O Marco Legal do Saneamento Básico, aprovado no Brasil, estabelece metas ambiciosas para a universalização dos serviços de:",
      alternativas: ["Energia elétrica e gás natural.", "Internet banda larga e telefonia móvel.", "Coleta de lixo e reciclagem.", "Água potável e coleta e tratamento de esgoto."],
      correta: 3,
      explicacao: "O principal objetivo do Marco Legal do Saneamento (Lei nº 14.026/2020) é garantir que 99% da população tenha acesso à água potável e 90% tenha coleta e tratamento de esgoto até 2033."
    },
    {
      enunciado: "A crescente preocupação com as mudanças climáticas impulsionou a busca por fontes de energia renováveis. No Brasil, qual fonte tem se destacado como a de maior crescimento na matriz energética nos últimos anos?",
      alternativas: ["Nuclear", "Hidrelétrica", "Solar e Eólica", "Carvão mineral"],
      correta: 2,
      explicacao: "O Brasil tem investido pesadamente na expansão das usinas de energia solar e eólica, especialmente na região Nordeste, diversificando sua matriz energética e reduzindo a dependência das hidrelétricas."
    },
    {
      enunciado: "Qual evento esportivo de grande porte está programado para ser sediado no Brasil em 2027?",
      alternativas: ["Olimpíadas de Inverno", "Copa do Mundo de Basquete Masculino", "Copa do Mundo de Futebol Feminino", "Pan-Americano de Atletismo"],
      correta: 2,
      explicacao: "O Brasil foi oficialmente escolhido pela FIFA para ser o país-sede da Copa do Mundo de Futebol Feminino de 2027, um marco para o esporte na América do Sul."
    },
    {
      enunciado: "O Censo Demográfico realizado pelo IBGE é a mais ampla pesquisa sobre a população brasileira. Segundo os resultados mais recentes, qual foi a principal tendência observada no crescimento populacional do país?",
      alternativas: ["Aceleração do crescimento e aumento da taxa de natalidade.", "Estagnação da população e aumento do número de idosos.", "Desaceleração do crescimento, envelhecimento da população e queda na taxa de fecundidade.", "Aumento expressivo da população jovem nas metrópoles."],
      correta: 2,
      explicacao: "Os dados do Censo 2022 confirmaram a tendência de transição demográfica do Brasil, com um ritmo de crescimento mais lento, uma população envelhecendo e as famílias tendo menos filhos."
    },
    {
      enunciado: "O conflito entre Israel e o grupo Hamas, que se intensificou no final de 2023, tem como epicentro qual território?",
      alternativas: ["Cisjordânia", "Faixa de Gaza", "Colinas de Golã", "Península do Sinai"],
      correta: 1,
      explicacao: "A Faixa de Gaza, controlada pelo Hamas, tem sido o principal palco do conflito, que gerou uma grave crise humanitária e amplas repercussões geopolíticas no Oriente Médio."
    },
    {
      enunciado: "Qual fenômeno climático, caracterizado pelo aquecimento anormal das águas do Oceano Pacífico, teve forte influência no clima global entre 2023 e 2024, causando secas severas em algumas regiões e chuvas intensas em outras?",
      alternativas: ["La Niña", "El Niño", "Monção Asiática", "Efeito Estufa"],
      correta: 1,
      explicacao: "O El Niño é um fenômeno climático natural que impacta o clima em escala global. No Brasil, ele tende a causar secas na Amazônia e no Nordeste, e chuvas intensas na região Sul."
    },
    {
      enunciado: "A eleição presidencial de 2024 em qual país foi acompanhada com grande atenção global devido ao seu impacto na geopolítica mundial e nas relações comerciais?",
      alternativas: ["Rússia", "China", "Índia", "Estados Unidos"],
      correta: 3,
      explicacao: "As eleições presidenciais nos Estados Unidos têm repercussões globais significativas, afetando desde acordos comerciais e alianças militares até políticas ambientais e a economia mundial."
    },
    {
      enunciado: "O 'arcabouço fiscal' é o nome dado à nova regra que substituiu o 'teto de gastos' no Brasil. Seu principal objetivo é:",
      alternativas: ["Limitar o aumento das despesas do governo ao crescimento da arrecadação.", "Proibir completamente o aumento de gastos públicos.", "Vincular os gastos apenas à inflação do ano anterior.", "Permitir gastos ilimitados em saúde e educação."],
      correta: 0,
      explicacao: "O novo arcabouço fiscal busca equilibrar as contas públicas, permitindo que a despesa do governo cresça, mas dentro de um limite (70%) do crescimento da receita, além de garantir um piso para os investimentos."
    },
    {
      enunciado: "Em 2023, a Índia alcançou um marco histórico em sua exploração espacial, tornando-se o quarto país a conseguir realizar um pouso bem-sucedido em qual corpo celeste?",
      alternativas: ["Marte", "Vênus", "Lua", "Asteroide Bennu"],
      correta: 2,
      explicacao: "Com a missão Chandrayaan-3, a Índia realizou um pouso suave no polo sul da Lua, uma região inexplorada e de grande interesse científico, entrando para o seleto grupo de nações com essa capacidade."
    },
    {
      enunciado: "A discussão sobre a regulação das plataformas digitais e o combate à desinformação (fake news) tem sido um tema central no poder legislativo e judiciário brasileiro, sendo o principal projeto relacionado a esse tema conhecido como:",
      alternativas: ["Marco Civil da Internet", "Lei Carolina Dieckmann", "PL das Fake News (PL 2630)", "Estatuto da Comunicação Social"],
      correta: 2,
      explicacao: "O Projeto de Lei 2630, conhecido como PL das Fake News, propõe a criação da Lei Brasileira de Liberdade, Responsabilidade e Transparência na Internet, buscando regular a atuação de redes sociais e serviços de mensagem."
    },
    {
        enunciado: "Qual importante evento climático extremo marcou o estado do Rio Grande do Sul em 2024, gerando uma das maiores catástrofes naturais da história do Brasil?",
        alternativas: ["Um terremoto de grande magnitude.", "Uma erupção vulcânica.", "Uma onda de calor recorde.", "Enchentes e inundações severas."],
        correta: 3,
        explicacao: "Em 2024, o Rio Grande do Sul foi atingido por enchentes históricas, causadas por um volume de chuvas sem precedentes, que levaram à destruição de cidades e a uma grave crise humanitária e de infraestrutura."
    },
    {
        enunciado: "O Novo Ensino Médio, implementado no Brasil, tem sido alvo de debates e propostas de revisão. Uma das principais críticas ao modelo original refere-se à:",
        alternativas: ["Redução excessiva da carga horária de matérias como Português e Matemática.", "Obrigatoriedade do ensino de latim.", "Extinção do Exame Nacional do Ensino Médio (ENEM).", "Proibição do uso de tecnologia em sala de aula."],
        correta: 0,
        explicacao: "Uma das críticas mais contundentes ao Novo Ensino Médio é a diminuição da carga horária de disciplinas da formação geral básica, como Português e Matemática, para dar lugar aos itinerários formativos, o que gerou preocupação sobre a qualidade da educação."
    },
    {
        enunciado: "A exploração de petróleo em qual região sensível do ponto de vista ambiental tem gerado debates entre o governo, ambientalistas e a Petrobras?",
        alternativas: ["No Pantanal Mato-Grossense.", "Na Foz do Rio Amazonas.", "No Arquipélago de Fernando de Noronha.", "Na Bacia de Campos."],
        correta: 1,
        explicacao: "A perfuração de poços de petróleo na Margem Equatorial, especialmente na Bacia da Foz do Amazonas, é um tema polêmico devido aos potenciais riscos ambientais a um ecossistema único e frágil, gerando embates sobre a licença ambiental."
    },
    {
        enunciado: "Em 2024, o Comitê de Política Monetária (COPOM) do Banco Central do Brasil tem tomado decisões sobre a taxa básica de juros da economia, conhecida como:",
        alternativas: ["Taxa de Câmbio", "Taxa Selic", "Taxa Referencial (TR)", "IPCA"],
        correta: 1,
        explicacao: "A Taxa Selic é o principal instrumento de política monetária do Brasil para controlar a inflação. Suas reuniões e decisões sobre o aumento, manutenção ou corte da taxa são acompanhadas de perto pelo mercado."
    },
    {
        enunciado: "As relações diplomáticas entre Brasil e qual país sul-americano ficaram estremecidas em 2024 devido a questões políticas internas deste país, incluindo a inelegibilidade de candidatos de oposição?",
        alternativas: ["Argentina", "Chile", "Colômbia", "Venezuela"],
        correta: 3,
        explicacao: "O processo eleitoral na Venezuela, com a exclusão de importantes candidatos da oposição, gerou críticas e preocupações de diversos países, incluindo o Brasil, afetando as relações diplomáticas na região."
    }
  ]
};