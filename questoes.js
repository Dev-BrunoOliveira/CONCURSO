const questoes = {
  // ===================================================
  // BLOCO I - LÍNGUA PORTUGUESA (24 QUESTÕES)
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
	}
  ],

  // ===================================================
  // BLOCO II - DIREITO (40 QUESTÕES)
  // ===================================================
  direito_penal: [
    {
      enunciado: "O funcionário público que exige, para si ou para outrem, direta ou indiretamente, vantagem indevida em razão da função, comete o crime de:",
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
    }
  ],
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
    }
  ],
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
    }
  ],
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
    }
  ],
  direito_administrativo: [
    {
        enunciado: "O atributo do ato administrativo que impõe a coercibilidade de seu cumprimento, permitindo o uso da força pela Administração, é a:",
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
        enunciado: "Um servidor público que utiliza materiais da repartição para realizar um trabalho particular comete um ato de improbidade administrativa que gera:",
        alternativas: ["Enriquecimento ilícito.", "Prejuízo ao erário.", "Atentado contra os princípios da administração.", "Concessão indevida de benefício fiscal."],
        correta: 1,
        explicacao: "O uso de bens públicos em proveito particular, mesmo que não gere enriquecimento para o agente, causa um dano (prejuízo) ao patrimônio público. A conduta se enquadra no Art. 10 da Lei de Improbidade Administrativa."
    }
  ],
  normas_da_corregedoria: [
    {
        enunciado: "Incumbe ao Escrivão Judicial, de acordo com as Normas da CGJ-SP:",
        alternativas: ["Proferir decisões interlocutórias nos processos.", "Realizar audiências na ausência do juiz.", "Abrir conclusão dos autos ao juiz no prazo de 1 dia.", "Aconselhar as partes sobre o mérito da causa."],
        correta: 2,
        explicacao: "É uma das principais incumbências do diretor de ofício (escrivão). Após a juntada de petições, os autos devem ser encaminhados (feitos conclusos) ao juiz para despacho, decisão ou sentença no prazo de 1 dia, e executados em 5 dias."
    },
    {
        enunciado: "A restauração de autos extraviados ou destruídos será processada:",
        alternativas: ["Em um novo processo, com nova distribuição.", "Nos próprios autos, após sua localização.", "Em autos apartados, apensados ao processo principal se encontrado.", "Perante o Tribunal de Justiça, independentemente da instância."],
        correta: 0,
        explicacao: "A restauração de autos dá origem a um novo processo, com nova numeração e registro, onde as partes serão intimadas a apresentar as cópias de documentos que possuírem para recompor o processo original."
    },
    {
        enunciado: "Segundo as Normas da Corregedoria, é vedado ao servidor lançar nos autos cotas:",
        alternativas: ["Certificando o decurso de um prazo.", "Interlineares ou marginais, devendo usar certidão para qualquer observação.", "Informando a conclusão dos autos ao juiz.", "Indicando o número de folhas do processo."],
        correta: 1,
        explicacao: "As Normas proíbem expressamente que os servidores façam anotações nas margens ou entrelinhas dos autos. Qualquer observação ou informação necessária deve ser feita por meio de uma certidão formal."
    }
  ],

  // ===================================================
  // BLOCO III - CONHECIMENTOS GERAIS (36 QUESTÕES)
  // ===================================================
  matematica: [
    {
      enunciado: "Um produto que custava R$ 80,00 teve um aumento de 10%. Qual o novo preço do produto?",
      alternativas: ["R$ 88,00", "R$ 90,00", "R$ 85,00", "R$ 81,00"],
      correta: 0,
      explicacao: "Para calcular 10% de 80, basta multiplicar 80 por 0,10, o que resulta em 8. O novo preço é o preço antigo mais o aumento: R$ 80,00 + R$ 8,00 = R$ 88,00."
    },
    {
      enunciado: "Se 3 escreventes digitam 30 páginas em 2 horas, quantos escreventes são necessários para digitar 60 páginas em 4 horas, mantendo a mesma produtividade?",
      alternativas: ["3 escreventes", "4 escreventes", "5 escreventes", "6 escreventes"],
      correta: 0,
      explicacao: "É uma regra de três composta. Escreventes (E), Páginas (P), Horas (H). E é diretamente proporcional a P e inversamente proporcional a H. Logo: (3/x) = (30/60) * (4/2) => (3/x) = (1/2) * 2 => 3/x = 1 => x = 3."
    },
    {
      enunciado: "Um processo foi dividido entre três servidores em partes proporcionais a 2, 3 e 5. Se o total de páginas era 500, quantas páginas o servidor que recebeu a parte intermediária analisou?",
      alternativas: ["100", "150", "200", "250"],
      correta: 1,
      explicacao: "Soma-se as partes proporcionais: 2 + 3 + 5 = 10. Divide-se o total pela soma: 500 / 10 = 50 (constante de proporcionalidade). A parte intermediária é 3, então: 50 * 3 = 150 páginas."
    },
    {
      enunciado: "Qual é o Mínimo Múltiplo Comum (MMC) entre 12 e 18?",
      alternativas: ["6", "24", "36", "72"],
      correta: 2,
      explicacao: "Fatorando os números: 12 = 2² * 3. 18 = 2 * 3². O MMC é o produto dos fatores comuns e não comuns com seus maiores expoentes: 2² * 3² = 4 * 9 = 36."
    },
    {
      enunciado: "Uma sala retangular mede 5 metros de largura por 8 metros de comprimento. Qual é a sua área?",
      alternativas: ["13 m²", "26 m²", "36 m²", "40 m²"],
      correta: 3,
      explicacao: "A área de um retângulo é calculada multiplicando-se a medida da largura pela medida do comprimento. Área = 5m * 8m = 40 m²."
    },
    {
        enunciado: "Um escrevente comprou um Vade Mecum com 25% de desconto e pagou R$ 180,00. Qual era o preço original do livro?",
        alternativas: ["R$ 200,00", "R$ 225,00", "R$ 240,00", "R$ 250,00"],
        correta: 2,
        explicacao: "Se houve 25% de desconto, o valor pago (R$ 180) corresponde a 75% (ou 0,75) do preço original (P). A equação é: 0,75 * P = 180. Logo, P = 180 / 0,75, que resulta em R$ 240,00."
    },
    {
        enunciado: "Um capital de R$ 5.000,00 foi aplicado a juros simples de 2% ao mês. Após 6 meses, qual será o montante?",
        alternativas: ["R$ 5.500,00", "R$ 5.600,00", "R$ 6.000,00", "R$ 5.800,00"],
        correta: 1,
        explicacao: "A fórmula do juro simples é J = C * i * t. J = 5000 * 0,02 * 6. J = 100 * 6 = R$ 600,00. O montante é o capital inicial mais os juros: M = 5000 + 600 = R$ 5.600,00."
    },
    {
        enunciado: "A razão entre o número de servidores homens e mulheres em um cartório é de 3 para 5. Se há um total de 40 servidores, quantas são as mulheres?",
        alternativas: ["15", "20", "25", "30"],
        correta: 2,
        explicacao: "A proporção total é 3 + 5 = 8 partes. Dividimos o total de servidores pelo total de partes: 40 / 8 = 5. Cada parte equivale a 5 servidores. Como as mulheres correspondem a 5 partes, o total de mulheres é 5 * 5 = 25."
    }
  ],
  informatica: [
    {
      enunciado: "Qual é o atalho de teclado para 'Salvar como' na maioria dos programas do Microsoft Office?",
      alternativas: ["Ctrl + S", "Ctrl + B", "F12", "Alt + S"],
      correta: 2,
      explicacao: "A tecla F12 é o atalho universal no pacote Office para abrir a caixa de diálogo 'Salvar como'. Ctrl + S apenas salva as alterações no arquivo já existente."
    },
    {
      enunciado: "No Microsoft Excel, qual fórmula é usada para somar os valores de um intervalo de células (A1 até A10)?",
      alternativas: ["=SOMA(A1:A10)", "=SOMAR(A1-A10)", "=TOTAL(A1:A10)", "=ADICIONAR(A1,A10)"],
      correta: 0,
      explicacao: "A função correta no Excel em português é SOMA. A sintaxe =SOMA(célula_inicial:célula_final) soma todos os valores numéricos contidos no intervalo especificado."
    },
    {
      enunciado: "Qual componente de um computador é responsável pelo processamento principal dos dados?",
      alternativas: ["Memória RAM", "Disco Rígido (HD/SSD)", "Placa de Vídeo", "CPU (Processador)"],
      correta: 3,
      explicacao: "A CPU (Central Processing Unit), ou Processador, é o 'cérebro' do computador. Ela executa as instruções e os cálculos necessários para que o sistema e os programas funcionem."
    },
    {
      enunciado: "No Microsoft Word, qual é a função do atalho 'CTRL + Z'?",
      alternativas: ["Refazer a última ação.", "Salvar o documento.", "Desfazer a última ação.", "Copiar o texto selecionado."],
      correta: 2,
      explicacao: "CTRL + Z é o comando universal para 'Desfazer' (Undo). Ele reverte a última ação realizada. Para 'Refazer' (Redo), o atalho é CTRL + Y."
    },
    {
      enunciado: "No Windows 10, para que serve o atalho 'Tecla do Windows + L'?",
      alternativas: ["Abrir o gerenciador de tarefas.", "Minimizar todas as janelas.", "Bloquear o computador.", "Abrir o explorador de arquivos."],
      correta: 2,
      explicacao: "O atalho Win + L bloqueia a sessão do Windows, levando o usuário de volta à tela de login. É uma medida de segurança rápida para quando você precisa se afastar do computador."
    },
    {
      enunciado: "Em uma planilha do Excel, o que o símbolo '$' faz em uma referência de célula (ex: $A$1)?",
      alternativas: [
        "Formata a célula como moeda.",
        "Cria uma referência absoluta, que não muda ao copiar a fórmula.",
        "Indica um erro na fórmula.",
        "Soma os valores da coluna A e da linha 1."
      ],
      correta: 1,
      explicacao: "O '$' cria uma referência absoluta (ou 'tranca' a referência). $A$1 trava a coluna e a linha. $A1 trava apenas a coluna. A$1 trava apenas a linha. Isso é útil ao arrastar fórmulas."
    },
    {
      enunciado: "Qual dos seguintes é um exemplo de software de correio eletrônico?",
      alternativas: ["Google Chrome", "Microsoft Word", "Microsoft Outlook", "Windows Defender"],
      correta: 2,
      explicacao: "Microsoft Outlook é um cliente de e-mail, parte do pacote Office. Google Chrome é um navegador, Word é um editor de texto e Windows Defender é um antivírus."
    },
    {
      enunciado: "Para selecionar um parágrafo inteiro no Microsoft Word, qual é o método mais rápido usando o mouse?",
      alternativas: [
        "Um clique no parágrafo.",
        "Clique duplo no parágrafo.",
        "Clique triplo no parágrafo.",
        "Arrastar o mouse sobre o parágrafo."
      ],
      correta: 2,
      explicacao: "Um clique seleciona o ponto de inserção. Um clique duplo seleciona a palavra. Um clique triplo em qualquer lugar de um parágrafo seleciona o parágrafo inteiro."
    },
    {
        enunciado: "No Microsoft Word, para aplicar negrito a um texto selecionado, qual atalho de teclado deve ser utilizado?",
        alternativas: ["Ctrl + I", "Ctrl + N", "Ctrl + S", "Ctrl + B"],
        correta: 1,
        explicacao: "O atalho para Negrito (Bold) no Word em português é Ctrl + N. Em inglês, seria Ctrl + B. Ctrl + I é para Itálico e Ctrl + S para Sublinhado."
    },
    {
        enunciado: "No Microsoft Excel, a função =SE(A1>10; 'APROVADO'; 'REPROVADO') retornará 'APROVADO' se:",
        alternativas: ["O valor na célula A1 for igual a 10.", "O valor na célula A1 for menor que 10.", "O valor na célula A1 for maior ou igual a 10.", "O valor na célula A1 for estritamente maior que 10."],
        correta: 3,
        explicacao: "A função SE avalia uma condição lógica. Se a condição (A1>10) for verdadeira, ela retorna o primeiro valor ('APROVADO'). Se for falsa, retorna o segundo ('REPROVADO'). A condição só é verdadeira se A1 for 11, 12, etc."
    },
    {
        enunciado: "No contexto de segurança da informação, um software projetado para se infiltrar em um sistema de forma oculta, com o intuito de causar danos ou roubar informações, é conhecido como:",
        alternativas: ["Firewall", "Antivírus", "Malware", "Backup"],
        correta: 2,
        explicacao: "Malware é o termo genérico para qualquer software malicioso (malicious software), que inclui vírus, worms, trojans, spyware, etc. Firewall é uma barreira de proteção e Antivírus detecta e remove malwares."
    },
    {
        enunciado: "No Windows Explorer, qual é a maneira mais rápida de renomear um arquivo selecionado?",
        alternativas: ["Pressionar a tecla F2", "Clicar com o botão direito e selecionar 'Propriedades'", "Pressionar Ctrl + R", "Dar um clique duplo no arquivo"],
        correta: 0,
        explicacao: "Selecionar um arquivo e pressionar a tecla F2 é o atalho padrão do Windows para entrar no modo de renomeação do arquivo ou pasta."
    },
    {
        enunciado: "No Microsoft Word, a ferramenta 'Pincel de Formatação' serve para:",
        alternativas: ["Pintar o fundo da página.", "Copiar a formatação de um texto e aplicá-la em outro.", "Inserir uma imagem de um pincel.", "Alterar a cor da fonte para uma cor aleatória."],
        correta: 1,
        explicacao: "O Pincel de Formatação é uma ferramenta extremamente útil para copiar rapidamente toda a formatação (fonte, tamanho, cor, negrito, etc.) de uma seleção e aplicá-la a outra parte do texto."
    },
    {
        enunciado: "No Microsoft Excel, para congelar a linha superior de uma planilha para que ela permaneça visível durante a rolagem, você deve usar a opção:",
        alternativas: ["Exibir > Congelar Painéis > Congelar Linha Superior", "Dados > Congelar > Linha Superior", "Exibir > Layout da Página > Congelar", "Formatar > Congelar Linha"],
        correta: 0,
        explicacao: "A funcionalidade de congelar painéis, que permite manter linhas ou colunas visíveis, está localizada na guia 'Exibir' do Excel."
    }
  ],
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
    }
  ],
};