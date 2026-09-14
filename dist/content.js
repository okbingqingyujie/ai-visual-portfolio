/* 个人资料在此统一维护。空值会显示「待补充」，不会生成虚构联系方式。
   avatar: 本地图片路径，如 assets/portrait.webp。
   experience: [{ period: '2024 — 至今', title: '真实职位 · 公司', description: '真实经历说明' }]
   completedProjects / yearsExperience: 填写真实数值后，页面会自动替换待补充状态。 */
window.PORTFOLIO = {
  name: '卫婕',
  role: 'AI 产品经理',
  bio: '我关注技术带来的新表达，也相信视觉背后的判断更有价值。从概念探索、视觉叙事到细节打磨，让 AI 成为创作的延伸，让每一个画面都回应清晰的设计意图。',
  email: '472200422@qq.com',
  wechat: '13651288692',
  avatar: '',
  completedProjects: null,
  yearsExperience: null,
  experience: [],
  projects: {
    form: { title: '熔序 — 形态研究', category: '01 / MATERIAL EXPLORATION', image: 'assets/form.webp', alt: '黑色背景中带有琥珀光泽的金属流体雕塑', description: '在流动与秩序之间，寻找材质的新表情。以钛金属的冷峻与琥珀光的温度形成张力，让抽象的形态拥有触感。', concept: '以「流动的精密」为视觉命题，探索硬质金属与柔性形态的关系。低照度环境收束画面，内侧光线引导视线穿过雕塑。适用于艺术主视觉与材质探索方向。' },
    vessel: { title: '无声之物 — 产品视觉', category: '02 / PRODUCT VISION', image: 'assets/vessel.webp', alt: '银蓝色光线中安静陈列的玻璃器物', description: '用光，勾勒一种感知。让材质与留白成为叙事主体，以轻盈、克制的视觉语言呈现器物的气质。', concept: '以「安静的存在感」为方向，结合玻璃透射、金属反射与冷色光影。构图为品牌信息保留呼吸空间，探索产品氛围视觉的可能。此处无真实品牌或客户。' },
    world: { title: '彼方 — 世界构建', category: '03 / IMAGINED WORLDS', image: 'assets/world.webp', alt: '宏伟的沙漠建筑环绕一轮橙红色太阳', description: '为尚不存在的世界，构建真实感。通过尺度、光线与环境的关系，让虚构空间具备可感知的情绪。', concept: '以「通往未知的边界」为创作命题，用建筑的几何秩序与自然环境的粗粝形成对话。微小的人物提供尺度参照，暖色天光建立画面的情绪焦点。' }
  }
};
