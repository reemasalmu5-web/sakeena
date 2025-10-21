function analyzeFeeling() {
  const text = document.getElementById("feeling").value.trim();
  const result = document.getElementById("resultSection");
  const support = document.getElementById("supportText");
  const ayah = document.getElementById("ayahText");
  const en = document.getElementById("ayahEn");
  const surah = document.getElementById("ayahSurah");
  const comment = document.getElementById("ayahComment");
  const dua = document.getElementById("duaText");

  let data = {};

  if (text.includes("حزن") || text.includes("ضيق") || text.includes("بكاء")) {
    data = {
      support: "الحزن لا يعني ضعفًا، بل إن قلبك لا يزال حيًا ويشعر بعمق. لا بأس أن تحزن، فالمشاعر جزء من إنسانيتك. كل لحظة ضيق تحمل في طياتها بابًا من اللطف الإلهي لم يُفتح بعد. تذكّر أن الله أقرب مما تتخيل، وأن بعد الليل فجرًا لا يغيب.",
      ayah: "﴿إِنَّ مَعَ الْعُسْرِ يُسْرًا﴾",
      en: "Indeed, with hardship comes ease.",
      surah: "الشرح – آية 6",
      comment: "هذه الآية تذكّرنا أن الألم مؤقت، وأن وراء كل تعب راحة يُخفيها الله لحين موعدها المناسب.",
      dua: "اللهم اجعل قلبه جبرًا يليق بلطفك، واملأ روحه راحة ورضًا بنورك."
    };
  } else if (text.includes("قلق") || text.includes("توتر") || text.includes("خوف")) {
    data = {
      support: "القلق شعور طبيعي حين تضطرب الأشياء من حولنا، لكنه لا يدوم. خذ نفسًا عميقًا، وذكّر نفسك أن ما كُتب لك لن يفوتك، وما فاتك لم يكن لك. كل ما يحدث اليوم سيُفهم غدًا. الطمأنينة ليست في السيطرة على كل شيء، بل في ترك الأمر لمن بيده كل شيء.",
      ayah: "﴿وَمَن يَتَوَكَّلْ عَلَى اللَّهِ فَهُوَ حَسْبُهُ﴾",
      en: "And whoever relies upon Allah – then He is sufficient for him.",
      surah: "الطلاق – آية 3",
      comment: "هذه الآية تذكّرنا أن الاتكال الحقيقي على الله يطفئ قلق القلب مهما اضطربت الدنيا حوله.",
      dua: "اللهم أنزل على قلبه طمأنينتك، وبدّل قلقه سكونًا وثقة بك."
    };
  } else if (text.includes("اكتئاب") || text.includes("ضياع") || text.includes("يأس")) {
    data = {
      support: "ربما تشعر بثقل لا يُحتمل، وكأن النور بعيد. لكن ما تشعر به ليس نهاية، بل مرحلة يُهيئك الله بها لما هو أصفى. كل لحظة ضعف تُقربك من قوتك القادمة. لا تفقد الأمل، فالله لا يغيب عن أحد، وما ضاقت إلا لتتسع قريبًا.",
      ayah: "﴿لَا تَقْنَطُوا مِن رَّحْمَةِ اللَّهِ﴾",
      en: "Do not despair of the mercy of Allah.",
      surah: "الزمر – آية 53",
      comment: "هذه الآية تذكّرنا أن رحمة الله أوسع من كل شعورٍ بالعجز، وأن الأمل بالله لا ينطفئ أبدًا.",
      dua: "اللهم أنر قلبه بنورك، وبدّل اكتئابه يقينًا بكرمك."
    };
  } else if (text.includes("تعب") || text.includes("إرهاق") || text.includes("ملل")) {
    data = {
      support: "التعب لا يعني أنك فشلت، بل أنك حاولت أكثر من طاقتك. خذ استراحة، وامنح نفسك لحظة تنفس. الحياة ليست سباقًا، بل رحلة تحتاج صبرًا ورفقًا بنفسك. الله يرى مجهودك، وكل ما بذلته لن يضيع.",
      ayah: "﴿وَاصْبِرْ وَمَا صَبْرُكَ إِلَّا بِاللَّهِ﴾",
      en: "And be patient, and your patience is only through Allah.",
      surah: "النحل – آية 127",
      comment: "هذه الآية تذكّرنا أن الصبر لا يأتي منّا، بل يُغرس في القلب حين نتصل بالله حقًا.",
      dua: "اللهم قوِّ ضعفه، وجدد طاقته، واملأ قلبه صبرًا ورضا."
    };
  } else if (text.includes("فرح") || text.includes("سعيد") || text.includes("نجاح")) {
    data = {
      support: "الفرح نعمة تحتاج أن تُحتضن بالشكر. تذوق لحظتك، وشاركها بلطف مع من حولك. لا تخف من الفرح، فهو رزقٌ يرسله الله حين يرى أنك احتملت الكثير. استشعر أن السعادة التي تعيشها الآن هي رسالة حب من ربك.",
      ayah: "﴿فَبِذَٰلِكَ فَلْيَفْرَحُواۚ هُوَ خَيْرٌ مِّمَّا يَجْمَعُونَ﴾",
      en: "In that let them rejoice; it is better than what they accumulate.",
      surah: "يونس – آية 58",
      comment: "هذه الآية تذكّرنا أن الفرح الحقيقي لا يُشترى، بل يُوهب من الله حين نرضى بما قسم.",
      dua: "اللهم دمِّ فرحه، وبارك له في سعادته، واجعلها سببًا لزيادة شكره."
    };
  } else {
    data = {
      support: "المشاعر أحيانًا تختلط ولا تُفهم، وهذا طبيعي. لا تجبر نفسك على تفسير كل شيء. يكفي أن تسلّم الأمر لله، وتسمح لقلبك أن يستريح قليلًا. في الصمت أحيانًا شفاء لا يُقال.",
      ayah: "﴿أَلَا بِذِكْرِ اللَّهِ تَطْمَئِنُّ الْقُلُوبُ﴾",
      en: "Verily, in the remembrance of Allah do hearts find rest.",
      surah: "الرعد – آية 28",
      comment: "هذه الآية تذكّرنا أن السكون لا يُصنع، بل يُستمدّ من ذكر الله وحده.",
      dua: "اللهم اجعل في قلبه سكينتك، وفي لسانه ذكرك، وفي دربه نورك."
    };
  }

  support.innerHTML = data.support;
  ayah.innerHTML = data.ayah;
  en.innerHTML = data.en;
  surah.innerHTML = data.surah;
  comment.innerHTML = data.comment;
  dua.innerHTML = data.dua;

  result.style.display = "block";
}
