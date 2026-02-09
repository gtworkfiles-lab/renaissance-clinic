{/* Переваги з більш делікатними формулюваннями */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
  {[
    { 
      icon: <ShieldCheck className="text-teal-600" size={32}/>, 
      title: "Безкоштовна підтримка", 
      desc: "Первинна консультація та складання плану реабілітації є повністю безкоштовними" 
    },
    { 
      icon: <Clock className="text-teal-600" size={32}/>, 
      title: "Анонімно 24/7", 
      desc: "Ми поруч у будь-який час, гарантуючи повну приватність вашого звернення" 
    },
    { 
      icon: <Heart className="text-teal-600" size={32}/>, 
      title: "Турбота", 
      desc: "Створюємо затишне та безпечне середовище для відновлення ваших внутрішніх сил" 
    }
  ].map((item, i) => (
    <div key={i} className="p-8 bg-white border border-gray-100 rounded-[40px] text-center shadow-sm hover:shadow-md transition-shadow">
      <div className="mb-4 inline-block">{item.icon}</div>
      <h4 className="font-bold text-xl mb-2 text-gray-900">{item.title}</h4>
      <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
    </div>
  ))}
</div>