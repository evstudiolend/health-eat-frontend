// Sample Data
const SAMPLE_RECIPES = [
  {
    id: 1,
    title: "Греческий йогурт с ягодами",
    author: "От редакции",
    category: "breakfast",
    photo: "🥣",
    visibility: "curated",
    cook_time: 5,
    difficulty: "easy",
    office_friendly: true,
    kbju: { kcal: 180, protein: 15, fat: 6, carbs: 20 },
    servings: 1,
    tags: ["быстрое", "высокобелковое", "офис"],
    ingredients: [
      "Греческий йогурт 2% - 150г",
      "Замороженные ягоды - 80г",
      "Мёд - 1 ч.л."
    ],
    steps: [
      "Выложите йогурт в миску",
      "Добавьте размороженные ягоды",
      "Полейте мёдом"
    ]
  },
  {
    id: 2,
    title: "Куриная грудка с гречкой",
    author: "От редакции",
    category: "lunch",
    photo: "🍗",
    visibility: "curated",
    cook_time: 25,
    difficulty: "easy",
    office_friendly: false,
    kbju: { kcal: 420, protein: 38, fat: 12, carbs: 45 },
    servings: 1,
    tags: ["высокобелковое", "сбалансированное"],
    ingredients: [
      "Куриная грудка - 150г",
      "Гречка - 80г (сухая)",
      "Масло оливковое - 1 ч.л.",
      "Соль, перец"
    ],
    steps: [
      "Отварите гречку согласно инструкции",
      "Обжарьте грудку на оливковом масле 5-7 минут с каждой стороны",
      "Подавайте вместе"
    ]
  },
  {
    id: 3,
    title: "Овсянка с бананом",
    author: "От редакции",
    category: "breakfast",
    photo: "🥣",
    visibility: "curated",
    cook_time: 8,
    difficulty: "easy",
    office_friendly: true,
    kbju: { kcal: 285, protein: 10, fat: 7, carbs: 48 },
    servings: 1,
    tags: ["быстрое", "офис", "энергия"],
    ingredients: [
      "Овсяные хлопья - 50г",
      "Молоко 2.5% - 200мл",
      "Банан - 1 шт (средний)",
      "Корица"
    ],
    steps: [
      "Залейте хлопья молоком, варите 5 минут",
      "Нарежьте банан",
      "Добавьте банан и корицу"
    ]
  },
  {
    id: 4,
    title: "Творожная запеканка",
    author: "От редакции",
    category: "snack",
    photo: "🧁",
    visibility: "curated",
    cook_time: 35,
    difficulty: "medium",
    office_friendly: false,
    kbju: { kcal: 195, protein: 18, fat: 7, carbs: 15 },
    servings: 4,
    tags: ["высокобелковое", "десерт"],
    ingredients: [
      "Творог 5% - 400г",
      "Яйца - 2 шт",
      "Манка - 2 ст.л.",
      "Мёд - 2 ст.л.",
      "Ванилин"
    ],
    steps: [
      "Смешайте все ингредиенты",
      "Выпекайте при 180°C 30 минут",
      "Остудите перед подачей"
    ]
  },
  {
    id: 5,
    title: "Салат с тунцом",
    author: "От редакции",
    category: "lunch",
    photo: "🥗",
    visibility: "curated",
    cook_time: 10,
    difficulty: "easy",
    office_friendly: true,
    kbju: { kcal: 245, protein: 28, fat: 10, carbs: 12 },
    servings: 1,
    tags: ["быстрое", "высокобелковое", "офис", "низкоуглеводное"],
    ingredients: [
      "Тунец консервированный - 100г",
      "Листья салата - 100г",
      "Помидоры черри - 100г",
      "Огурец - 1 шт",
      "Оливковое масло - 1 ч.л.",
      "Лимонный сок"
    ],
    steps: [
      "Нарежьте овощи",
      "Смешайте с тунцом",
      "Заправьте маслом и соком лимона"
    ]
  },
  {
    id: 6,
    title: "Омлет с овощами",
    author: "От редакции",
    category: "breakfast",
    photo: "🍳",
    visibility: "curated",
    cook_time: 12,
    difficulty: "easy",
    office_friendly: false,
    kbju: { kcal: 220, protein: 16, fat: 14, carbs: 8 },
    servings: 1,
    tags: ["быстрое", "высокобелковое", "низкоуглеводное"],
    ingredients: [
      "Яйца - 2 шт",
      "Молоко - 50мл",
      "Болгарский перец - 50г",
      "Помидор - 50г",
      "Масло оливковое - 1 ч.л."
    ],
    steps: [
      "Взбейте яйца с молоком",
      "Нарежьте овощи мелко",
      "Обжарьте овощи 2 минуты",
      "Залейте яичной смесью, готовьте 5 минут"
    ]
  },
  {
    id: 7,
    title: "Хумус с овощами",
    author: "От редакции",
    category: "snack",
    photo: "🥕",
    visibility: "curated",
    cook_time: 5,
    difficulty: "easy",
    office_friendly: true,
    kbju: { kcal: 180, protein: 7, fat: 8, carbs: 20 },
    servings: 1,
    tags: ["быстрое", "офис", "веган"],
    ingredients: [
      "Хумус - 80г",
      "Морковь - 100г",
      "Огурец - 100г",
      "Сладкий перец - 100г"
    ],
    steps: [
      "Нарежьте овощи палочками",
      "Подавайте с хумусом"
    ]
  },
  {
    id: 8,
    title: "Запеченная рыба с овощами",
    author: "От редакции",
    category: "dinner",
    photo: "🐟",
    visibility: "curated",
    cook_time: 30,
    difficulty: "easy",
    office_friendly: false,
    kbju: { kcal: 310, protein: 35, fat: 14, carbs: 15 },
    servings: 1,
    tags: ["высокобелковое", "сбалансированное"],
    ingredients: [
      "Филе белой рыбы - 180г",
      "Кабачок - 150г",
      "Помидор - 100г",
      "Лимон - половинка",
      "Оливковое масло - 1 ч.л.",
      "Специи"
    ],
    steps: [
      "Нарежьте овощи крупно",
      "Выложите рыбу и овощи на противень",
      "Сбрызните маслом, добавьте специи и лимон",
      "Запекайте 25 минут при 180°C"
    ]
  },
  {
    id: 9,
    title: "Протеиновый смузи",
    author: "От редакции",
    category: "snack",
    photo: "🥤",
    visibility: "curated",
    cook_time: 3,
    difficulty: "easy",
    office_friendly: true,
    kbju: { kcal: 210, protein: 22, fat: 5, carbs: 22 },
    servings: 1,
    tags: ["быстрое", "высокобелковое", "офис"],
    ingredients: [
      "Протеиновый порошок - 30г",
      "Молоко 1.5% - 250мл",
      "Банан - 1 шт",
      "Лёд - 50г"
    ],
    steps: [
      "Все ингредиенты в блендер",
      "Взбейте до однородности",
      "Подавайте сразу"
    ]
  },
  {
    id: 10,
    title: "Рис с курицей и брокколи",
    author: "От редакции",
    category: "lunch",
    photo: "🍚",
    visibility: "curated",
    cook_time: 30,
    difficulty: "easy",
    office_friendly: false,
    kbju: { kcal: 445, protein: 40, fat: 10, carbs: 52 },
    servings: 1,
    tags: ["высокобелковое", "сбалансированное"],
    ingredients: [
      "Куриная грудка - 150г",
      "Рис бурый - 70г (сухой)",
      "Брокколи - 150г",
      "Соевый соус - 1 ст.л.",
      "Чеснок - 1 зубчик"
    ],
    steps: [
      "Отварите рис",
      "Обжарьте курицу с чесноком",
      "Добавьте брокколи, тушите 5 минут",
      "Смешайте с рисом и соевым соусом"
    ]
  },
  {
    id: 11,
    title: "Яблоко с арахисовой пастой",
    author: "От редакции",
    category: "snack",
    photo: "🍎",
    visibility: "curated",
    cook_time: 2,
    difficulty: "easy",
    office_friendly: true,
    kbju: { kcal: 195, protein: 5, fat: 10, carbs: 24 },
    servings: 1,
    tags: ["быстрое", "офис", "энергия"],
    ingredients: [
      "Яблоко среднее - 1 шт",
      "Арахисовая паста - 1 ст.л."
    ],
    steps: [
      "Нарежьте яблоко дольками",
      "Подавайте с пастой"
    ]
  },
  {
    id: 12,
    title: "Овощной суп с чечевицей",
    author: "От редакции",
    category: "lunch",
    photo: "🍲",
    visibility: "curated",
    cook_time: 35,
    difficulty: "easy",
    office_friendly: false,
    kbju: { kcal: 285, protein: 16, fat: 5, carbs: 45 },
    servings: 2,
    tags: ["сбалансированное", "веган"],
    ingredients: [
      "Красная чечевица - 100г",
      "Морковь - 1 шт",
      "Лук - 1 шт",
      "Помидор - 2 шт",
      "Овощной бульон - 1л",
      "Специи"
    ],
    steps: [
      "Обжарьте лук и морковь",
      "Добавьте чечевицу и бульон",
      "Варите 20 минут",
      "Добавьте помидоры, специи, варите ещё 5 минут"
    ]
  },
  {
    id: 13,
    title: "Творог с огурцом и зеленью",
    author: "От редакции",
    category: "snack",
    photo: "🥒",
    visibility: "curated",
    cook_time: 5,
    difficulty: "easy",
    office_friendly: true,
    kbju: { kcal: 130, protein: 16, fat: 5, carbs: 6 },
    servings: 1,
    tags: ["быстрое", "высокобелковое", "офис", "низкоуглеводное"],
    ingredients: [
      "Творог 5% - 150г",
      "Огурец - 1 шт",
      "Укроп, петрушка",
      "Соль"
    ],
    steps: [
      "Нарежьте огурец мелким кубиком",
      "Порубите зелень",
      "Смешайте с творогом"
    ]
  },
  {
    id: 14,
    title: "Паста с томатным соусом и базиликом",
    author: "От редакции",
    category: "dinner",
    photo: "🍝",
    visibility: "curated",
    cook_time: 20,
    difficulty: "easy",
    office_friendly: false,
    kbju: { kcal: 385, protein: 14, fat: 8, carbs: 68 },
    servings: 1,
    tags: ["веган"],
    ingredients: [
      "Паста из твердых сортов - 80г",
      "Томаты в собственном соку - 200г",
      "Чеснок - 2 зубчика",
      "Базилик свежий",
      "Оливковое масло - 1 ч.л."
    ],
    steps: [
      "Отварите пасту",
      "Обжарьте чеснок, добавьте томаты",
      "Тушите соус 10 минут",
      "Смешайте с пастой, добавьте базилик"
    ]
  },
  {
    id: 15,
    title: "Запеченные овощи с сыром фета",
    author: "От редакции",
    category: "dinner",
    photo: "🥗",
    visibility: "curated",
    cook_time: 35,
    difficulty: "easy",
    office_friendly: false,
    kbju: { kcal: 265, protein: 12, fat: 16, carbs: 22 },
    servings: 1,
    tags: ["низкоуглеводное", "вегетарианское"],
    ingredients: [
      "Кабачок - 150г",
      "Баклажан - 100г",
      "Сладкий перец - 100г",
      "Помидоры черри - 100г",
      "Сыр фета - 50г",
      "Оливковое масло - 1 ч.л."
    ],
    steps: [
      "Нарежьте овощи крупно",
      "Сбрызните маслом, запекайте 25 минут при 200°C",
      "Добавьте раскрошенную фету",
      "Запекайте ещё 5 минут"
    ]
  }
];

const COMMON_INGREDIENTS = [
  "Куриная грудка", "Яйца", "Творог", "Греческий йогурт",
  "Гречка", "Рис", "Овсянка", "Паста",
  "Помидоры", "Огурцы", "Перец", "Лук",
  "Чеснок", "Морковь", "Брокколи", "Кабачок",
  "Рыба", "Тунец консерв.", "Молоко", "Сыр",
  "Оливковое масло", "Лимон"
];

const GUEST_MODE_DATA = {
  italian: {
    macro_plan: "Сегодня ешьте легко до ресторана: овощи + белок. В ресторане наслаждайтесь без вины.",
    safe_choices: [
      "Гриль из рыбы или курицы",
      "Салат капрезе с моцареллой",
      "Овощной минестроне"
    ],
    compensation: "Завтра: добавьте больше овощей и воды. Всё в балансе!"
  },
  japanese: {
    macro_plan: "Японская кухня часто богата белком и умеренна по калориям. Выбирайте разумно.",
    safe_choices: [
      "Сашими или суши с рыбой",
      "Мисо-суп",
      "Эдамамэ"
    ],
    compensation: "Завтра: обычный режим. Один приятный вечер не испортит прогресс!"
  },
  russian: {
    macro_plan: "Выбирайте блюда с меньшим количеством жира и простых углеводов.",
    safe_choices: [
      "Запеченное мясо или рыба",
      "Овощные салаты без майонеза",
      "Щи или борщ"
    ],
    compensation: "Завтра: легкий день с акцентом на овощи и белок."
  },
  other: {
    macro_plan: "Общие правила: выбирайте запеченное вместо жареного, больше овощей.",
    safe_choices: [
      "Запеченное или гриль",
      "Свежие салаты",
      "Супы на прозрачном бульоне"
    ],
    compensation: "Завтра: обычный режим питания. Вы отлично справились!"
  }
};

// API Configuration
const API_BASE = 'https://your-backend.vercel.app'; // Change this to your backend URL!

// Application State
class NutritionApp {
  constructor() {
    this.user = {
      goal: 'maintain',
      target: {
        kcal: 1800,
        protein: 120,
        fat: 60,
        carbs: 160
      },
      savedRecipes: [],
      shoppingList: [],
      daysUsing: 1,
      mood: 3,
      backendUrl: API_BASE
    };
    
    this.chatHistory = [];
    
    this.scope = 'curated';
    this.recipeScope = 'curated';
    this.filters = {
      category: 'all',
      quick: false,
      office: false
    };
    this.selectedIngredients = [];
    this.currentScreen = 'onboarding-screen';
    this.previousScreen = null;
    this.breathingInterval = null;
    this.breathingTimeLeft = 60;
    
    this.init();
  }
  
  init() {
    this.renderIngredientChips();
    this.updateScopeButtons();
    this.loadBackendUrl();
    this.checkBackendHealth();
  }
  
  async checkBackendHealth() {
    try {
      const response = await fetch(`${this.user.backendUrl}/api/health`, { 
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
      });
      if (response.ok) {
        console.log('Backend is healthy');
      }
    } catch (error) {
      console.warn('Backend is not accessible:', error);
    }
  }
  
  loadBackendUrl() {
    const urlInput = document.getElementById('backend-url');
    if (urlInput) {
      urlInput.value = this.user.backendUrl;
    }
  }
  
  saveBackendUrl() {
    const urlInput = document.getElementById('backend-url');
    const url = urlInput.value.trim();
    
    if (!url) {
      alert('Введите URL backend');
      return;
    }
    
    this.user.backendUrl = url;
    this.showBackendStatus('Сохранено! Проверяем соединение...', 'info');
    
    // Test the connection
    this.testBackendConnection();
  }
  
  async testBackendConnection() {
    try {
      const response = await fetch(`${this.user.backendUrl}/api/health`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
      });
      
      if (response.ok) {
        this.showBackendStatus('✓ Backend подключен успешно!', 'success');
      } else {
        this.showBackendStatus(`⚠ Ошибка: ${response.status}. Проверьте URL.`, 'error');
      }
    } catch (error) {
      this.showBackendStatus(`✗ Не удалось подключиться. Проверьте URL и попробуйте снова.`, 'error');
    }
  }
  
  showBackendStatus(message, type) {
    const statusDiv = document.getElementById('backend-status');
    if (!statusDiv) return;
    
    statusDiv.style.display = 'block';
    statusDiv.textContent = message;
    
    if (type === 'success') {
      statusDiv.style.background = 'rgba(var(--color-success-rgb), 0.15)';
      statusDiv.style.color = 'var(--color-success)';
      statusDiv.style.border = '1px solid var(--color-success)';
    } else if (type === 'error') {
      statusDiv.style.background = 'rgba(var(--color-error-rgb), 0.15)';
      statusDiv.style.color = 'var(--color-error)';
      statusDiv.style.border = '1px solid var(--color-error)';
    } else {
      statusDiv.style.background = 'var(--color-bg-1)';
      statusDiv.style.color = 'var(--color-text-secondary)';
      statusDiv.style.border = '1px solid var(--color-border)';
    }
  }
  
  setMood(mood) {
    this.user.mood = mood;
    document.querySelectorAll('.mood-btn').forEach(btn => {
      if (parseInt(btn.dataset.mood) === mood) {
        btn.classList.add('selected');
      } else {
        btn.classList.remove('selected');
      }
    });
  }
  
  showScreen(screenId) {
    this.previousScreen = this.currentScreen;
    this.currentScreen = screenId;
    
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById(screenId).classList.add('active');
    
    const header = document.getElementById('header');
    const bottomNav = document.getElementById('bottom-nav');
    const sosFab = document.getElementById('sos-fab');
    
    if (screenId === 'onboarding-screen' || screenId === 'goal-screen' || screenId === 'kbju-screen') {
      header.style.display = 'none';
      bottomNav.style.display = 'none';
      sosFab.style.display = 'none';
    } else {
      header.style.display = 'block';
      bottomNav.style.display = 'flex';
      sosFab.style.display = screenId === 'sos-screen' ? 'none' : 'block';
    }
    
    this.updateNavigation();
    this.loadScreenContent(screenId);
  }
  
  loadScreenContent(screenId) {
    switch(screenId) {
      case 'dashboard-screen':
        this.updateDashboardStats();
        break;
      case 'quick-screen':
        this.renderQuickRecipes();
        break;
      case 'recipes-screen':
        this.renderAllRecipes();
        break;
      case 'kbju-match-screen':
        this.renderKbjuMatch();
        break;
      case 'shopping-screen':
        this.renderShoppingList();
        break;
      case 'profile-screen':
        this.renderProfile();
        break;
      case 'ai-chat-screen':
        this.renderChatHistory();
        break;
    }
  }
  
  navigateTo(screenId) {
    this.showScreen(screenId);
  }
  
  updateNavigation() {
    document.querySelectorAll('.nav-item').forEach(item => {
      const screen = item.dataset.screen;
      if (screen === this.currentScreen) {
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
    });
  }
  
  startGoalSelection() {
    this.showScreen('goal-screen');
  }
  
  selectGoal(goal) {
    this.user.goal = goal;
    document.querySelectorAll('.goal-btn').forEach(btn => {
      btn.classList.remove('selected');
    });
    document.querySelector(`[data-goal="${goal}"]`).classList.add('selected');
    
    // Update default KBJU based on goal
    const defaults = {
      lose: { kcal: 1600, protein: 120, fat: 50, carbs: 140 },
      maintain: { kcal: 1800, protein: 120, fat: 60, carbs: 160 },
      gain: { kcal: 2200, protein: 140, fat: 70, carbs: 200 }
    };
    
    const target = defaults[goal];
    document.getElementById('target-kcal').value = target.kcal;
    document.getElementById('target-protein').value = target.protein;
    document.getElementById('target-fat').value = target.fat;
    document.getElementById('target-carbs').value = target.carbs;
  }
  
  goToKbjuSetup() {
    this.showScreen('kbju-screen');
  }
  
  completeOnboarding() {
    this.user.target = {
      kcal: parseInt(document.getElementById('target-kcal').value),
      protein: parseInt(document.getElementById('target-protein').value),
      fat: parseInt(document.getElementById('target-fat').value),
      carbs: parseInt(document.getElementById('target-carbs').value)
    };
    
    this.showScreen('dashboard-screen');
  }
  
  setScope(scope) {
    this.scope = scope;
    this.updateScopeButtons();
  }
  
  setRecipeScope(scope) {
    this.recipeScope = scope;
    this.updateRecipeScopeButtons();
    this.renderAllRecipes();
  }
  
  updateScopeButtons() {
    document.querySelectorAll('.scope-btn').forEach(btn => {
      const btnScope = btn.dataset.scope;
      if (btnScope === this.scope) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });
  }
  
  updateRecipeScopeButtons() {
    const recipesScreen = document.getElementById('recipes-screen');
    recipesScreen.querySelectorAll('.scope-btn').forEach(btn => {
      const btnScope = btn.dataset.scope;
      if (btnScope === this.recipeScope) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });
  }
  
  setFilter(type, value) {
    if (type === 'category') {
      this.filters.category = value;
    }
    
    document.querySelectorAll(`[data-filter]`).forEach(tag => {
      if (tag.dataset.filter === value) {
        tag.classList.add('active');
      } else if (type === 'category' && ['all', 'breakfast', 'lunch', 'dinner', 'snack'].includes(tag.dataset.filter)) {
        tag.classList.remove('active');
      }
    });
    
    this.renderAllRecipes();
  }
  
  toggleQuickFilter() {
    this.filters.quick = !this.filters.quick;
    const btn = document.querySelector('[data-filter="quick"]');
    btn.classList.toggle('active');
    this.renderAllRecipes();
  }
  
  toggleOfficeFilter() {
    this.filters.office = !this.filters.office;
    const btn = document.querySelector('[data-filter="office"]');
    btn.classList.toggle('active');
    this.renderAllRecipes();
  }
  
  updateDashboardStats() {
    document.getElementById('saved-count').textContent = this.user.savedRecipes.length;
    document.getElementById('days-using').textContent = this.user.daysUsing;
  }
  
  getFilteredRecipes() {
    let recipes = SAMPLE_RECIPES;
    
    // Scope filter
    if (this.recipeScope === 'mine') {
      recipes = recipes.filter(r => this.user.savedRecipes.includes(r.id));
    } else if (this.recipeScope === 'curated') {
      recipes = recipes.filter(r => r.visibility === 'curated');
    }
    
    // Category filter
    if (this.filters.category !== 'all') {
      recipes = recipes.filter(r => r.category === this.filters.category);
    }
    
    // Quick filter
    if (this.filters.quick) {
      recipes = recipes.filter(r => r.cook_time <= 10);
    }
    
    // Office filter
    if (this.filters.office) {
      recipes = recipes.filter(r => r.office_friendly);
    }
    
    return recipes;
  }
  
  renderQuickRecipes() {
    const container = document.getElementById('quick-recipes');
    const recipes = SAMPLE_RECIPES.filter(r => r.cook_time <= 10 && r.office_friendly);
    
    if (recipes.length === 0) {
      container.innerHTML = '<div class="empty-state"><div class="empty-state-icon">🔍</div><p>Нет быстрых рецептов</p></div>';
      return;
    }
    
    container.innerHTML = recipes.slice(0, 5).map(recipe => this.renderRecipeCard(recipe)).join('');
  }
  
  renderAllRecipes() {
    const container = document.getElementById('all-recipes');
    const recipes = this.getFilteredRecipes();
    
    if (recipes.length === 0) {
      container.innerHTML = '<div class="empty-state"><div class="empty-state-icon">🔍</div><p>Нет рецептов по выбранным фильтрам</p></div>';
      return;
    }
    
    container.innerHTML = recipes.map(recipe => this.renderRecipeCard(recipe)).join('');
  }
  
  renderRecipeCard(recipe) {
    const isSaved = this.user.savedRecipes.includes(recipe.id);
    const difficultyMap = { easy: '⭐', medium: '⭐⭐', hard: '⭐⭐⭐' };
    
    return `
      <div class="recipe-card" onclick="app.showRecipeDetail(${recipe.id})">
        <div class="recipe-image">${recipe.photo}</div>
        <div class="recipe-content">
          <div class="recipe-header">
            <div class="recipe-title">${recipe.title}</div>
            <div class="recipe-author">${recipe.author}</div>
          </div>
          
          <div class="recipe-kbju">
            <div class="kbju-item">
              <span class="kbju-value">${recipe.kbju.kcal}</span>
              <span class="kbju-label">ккал</span>
            </div>
            <div class="kbju-item">
              <span class="kbju-value">${recipe.kbju.protein}</span>
              <span class="kbju-label">Б</span>
            </div>
            <div class="kbju-item">
              <span class="kbju-value">${recipe.kbju.fat}</span>
              <span class="kbju-label">Ж</span>
            </div>
            <div class="kbju-item">
              <span class="kbju-value">${recipe.kbju.carbs}</span>
              <span class="kbju-label">У</span>
            </div>
          </div>
          
          <div class="recipe-meta">
            <span class="meta-badge">⏱️ ${recipe.cook_time} мин</span>
            <span class="meta-badge">${difficultyMap[recipe.difficulty]}</span>
            ${recipe.office_friendly ? '<span class="meta-badge">💼 Офис</span>' : ''}
          </div>
          
          <div class="recipe-tags">
            ${recipe.tags.slice(0, 3).map(tag => `<span class="tag">${tag}</span>`).join('')}
          </div>
          
          <div class="recipe-actions" onclick="event.stopPropagation()">
            <button class="btn btn-sm ${isSaved ? 'btn-secondary' : ''}" onclick="app.toggleSaveRecipe(${recipe.id})">
              ${isSaved ? '✓ Сохранено' : '💾 Сохранить'}
            </button>
            <button class="btn btn-sm btn-secondary" onclick="app.addToShoppingList(${recipe.id})">
              🛒
            </button>
          </div>
        </div>
      </div>
    `;
  }
  
  showRecipeDetail(recipeId) {
    const recipe = SAMPLE_RECIPES.find(r => r.id === recipeId);
    if (!recipe) return;
    
    const isSaved = this.user.savedRecipes.includes(recipe.id);
    const difficultyMap = { easy: 'Легко', medium: 'Средне', hard: 'Сложно' };
    
    const content = `
      <div class="recipe-hero">${recipe.photo}</div>
      
      <h2>${recipe.title}</h2>
      <p style="color: var(--color-text-secondary); margin-bottom: 24px;">${recipe.author}</p>
      
      <div class="recipe-info">
        <div class="recipe-kbju" style="margin-bottom: 20px;">
          <div class="kbju-item">
            <span class="kbju-value">${recipe.kbju.kcal}</span>
            <span class="kbju-label">ккал</span>
          </div>
          <div class="kbju-item">
            <span class="kbju-value">${recipe.kbju.protein}г</span>
            <span class="kbju-label">Белки</span>
          </div>
          <div class="kbju-item">
            <span class="kbju-value">${recipe.kbju.fat}г</span>
            <span class="kbju-label">Жиры</span>
          </div>
          <div class="kbju-item">
            <span class="kbju-value">${recipe.kbju.carbs}г</span>
            <span class="kbju-label">Углеводы</span>
          </div>
        </div>
        
        <div class="recipe-meta" style="margin-bottom: 24px;">
          <span class="meta-badge">⏱️ ${recipe.cook_time} минут</span>
          <span class="meta-badge">${difficultyMap[recipe.difficulty]}</span>
          <span class="meta-badge">🍽️ ${recipe.servings} порц.</span>
          ${recipe.office_friendly ? '<span class="meta-badge">💼 Офис</span>' : ''}
        </div>
        
        <div class="recipe-tags" style="margin-bottom: 24px;">
          ${recipe.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
        </div>
        
        <h3>Ингредиенты</h3>
        <ul class="ingredients-list">
          ${recipe.ingredients.map(ing => `<li>${ing}</li>`).join('')}
        </ul>
        
        <h3>Приготовление</h3>
        <ol class="steps-list">
          ${recipe.steps.map((step, i) => `<li data-step="${i + 1}">${step}</li>`).join('')}
        </ol>
      </div>
      
      <div style="display: flex; gap: 12px; margin-top: 24px;">
        <button class="btn ${isSaved ? 'btn-secondary' : ''}" style="flex: 1;" onclick="app.toggleSaveRecipe(${recipe.id})">
          ${isSaved ? '✓ Сохранено' : '💾 Сохранить рецепт'}
        </button>
        <button class="btn btn-secondary" style="flex: 1;" onclick="app.addToShoppingList(${recipe.id})">
          🛒 В покупки
        </button>
      </div>
      
      <button class="btn btn-secondary" style="width: 100%; margin-top: 12px;" onclick="app.suggestAlternative(${recipe.id})">
        🔄 Надоело — предложи похожее
      </button>
    `;
    
    document.getElementById('recipe-detail-content').innerHTML = content;
    this.showScreen('recipe-detail-screen');
  }
  
  goBackFromRecipe() {
    if (this.previousScreen) {
      this.showScreen(this.previousScreen);
    } else {
      this.showScreen('recipes-screen');
    }
  }
  
  toggleSaveRecipe(recipeId) {
    const index = this.user.savedRecipes.indexOf(recipeId);
    if (index > -1) {
      this.user.savedRecipes.splice(index, 1);
    } else {
      this.user.savedRecipes.push(recipeId);
    }
    
    // Refresh current screen
    this.loadScreenContent(this.currentScreen);
  }
  
  addToShoppingList(recipeId) {
    const recipe = SAMPLE_RECIPES.find(r => r.id === recipeId);
    if (!recipe) return;
    
    recipe.ingredients.forEach(ing => {
      if (!this.user.shoppingList.find(item => item.name === ing)) {
        this.user.shoppingList.push({ name: ing, checked: false });
      }
    });
    
    alert(`Ингредиенты из "${recipe.title}" добавлены в список покупок!`);
  }
  
  async suggestAlternative(recipeId) {
    const recipe = SAMPLE_RECIPES.find(r => r.id === recipeId);
    if (!recipe) return;
    
    // Show loading state
    const content = document.getElementById('recipe-detail-content');
    const loadingDiv = document.createElement('div');
    loadingDiv.className = 'loading-message';
    loadingDiv.innerHTML = '<div class="loading-spinner"></div> <span>AI подбирает похожие рецепты...</span>';
    content.appendChild(loadingDiv);
    
    try {
      // Try AI rotation first
      const response = await fetch(`${this.user.backendUrl}/api/ai/rotate`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          recipeId: recipe.id,
          recipeName: recipe.title,
          kbju: recipe.kbju,
          category: recipe.category
        })
      });
      
      if (response.ok) {
        const data = await response.json();
        if (data.alternatives && data.alternatives.length > 0) {
          // Show AI suggested alternative
          const altId = data.alternatives[0].id || (recipe.id + 1);
          const altRecipe = SAMPLE_RECIPES.find(r => r.id === altId) || SAMPLE_RECIPES[Math.floor(Math.random() * SAMPLE_RECIPES.length)];
          
          loadingDiv.remove();
          this.showRecipeDetail(altRecipe.id);
          return;
        }
      }
    } catch (error) {
      console.warn('AI rotation failed, using fallback:', error);
    }
    
    // Fallback: Find similar recipes locally
    const alternatives = SAMPLE_RECIPES.filter(r => 
      r.id !== recipeId &&
      r.category === recipe.category &&
      Math.abs(r.kbju.kcal - recipe.kbju.kcal) <= 100
    );
    
    loadingDiv.remove();
    
    if (alternatives.length > 0) {
      const alt = alternatives[Math.floor(Math.random() * alternatives.length)];
      this.showRecipeDetail(alt.id);
    } else {
      alert('К сожалению, похожих рецептов пока нет. Попробуйте поискать в каталоге!');
    }
  }
  
  // AI Chat Functions
  renderChatHistory() {
    const container = document.getElementById('chat-messages');
    if (!container) return;
    
    // Keep initial assistant message and add history
    const messagesHtml = this.chatHistory.map(msg => {
      const className = msg.role === 'user' ? 'user' : 'assistant';
      return `
        <div class="chat-message ${className}">
          <div class="message-bubble">${this.escapeHtml(msg.content)}</div>
        </div>
      `;
    }).join('');
    
    if (this.chatHistory.length > 0) {
      container.innerHTML = messagesHtml;
    }
    
    // Scroll to bottom
    container.scrollTop = container.scrollHeight;
  }
  
  escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }
  
  async sendChatMessage() {
    const input = document.getElementById('chat-input');
    const message = input.value.trim();
    
    if (!message) return;
    
    // Add user message to history
    this.chatHistory.push({ role: 'user', content: message });
    input.value = '';
    
    // Show user message
    this.renderChatHistory();
    
    // Show loading state
    const loadingMsg = { role: 'assistant', content: '🤖 AI анализирует ваш запрос...' };
    this.chatHistory.push(loadingMsg);
    this.renderChatHistory();
    
    try {
      // Call AI API
      const response = await fetch(`${this.user.backendUrl}/api/ai/chat`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: message,
          userKBJU: this.user.target,
          mood: this.user.mood
        })
      });
      
      // Remove loading message
      this.chatHistory.pop();
      
      if (!response.ok) {
        throw new Error(`Backend error: ${response.status}`);
      }
      
      const data = await response.json();
      
      // Add AI response
      const responseText = data.message || `Я нашел ${data.recipes?.length || 0} рецептов для вас!`;
      this.chatHistory.push({ role: 'assistant', content: responseText });
      this.renderChatHistory();
      
      // Show recipe results
      if (data.recipes && data.recipes.length > 0) {
        this.renderAIRecipeResults(data.recipes, data.explanation);
      }
      
    } catch (error) {
      console.error('AI chat error:', error);
      
      // Remove loading message
      this.chatHistory.pop();
      
      // Fallback: local search
      const fallbackRecipes = this.localAISearch(message);
      
      const fallbackMsg = `Не могу подключиться к AI (${error.message}). Показываю локальные результаты:`;
      this.chatHistory.push({ role: 'assistant', content: fallbackMsg });
      this.renderChatHistory();
      
      this.renderAIRecipeResults(fallbackRecipes, 'Локальный поиск по ключевым словам');
    }
  }
  
  localAISearch(query) {
    const lowerQuery = query.toLowerCase();
    
    // Simple keyword matching
    let results = SAMPLE_RECIPES;
    
    // Check for time constraints
    if (lowerQuery.includes('быстро') || lowerQuery.includes('быстрый') || lowerQuery.includes('10')) {
      results = results.filter(r => r.cook_time <= 10);
    }
    
    // Check for protein
    if (lowerQuery.includes('белок') || lowerQuery.includes('протеин')) {
      results = results.filter(r => r.kbju.protein >= 20);
    }
    
    // Check for calories
    const calorieMatch = lowerQuery.match(/(\d{3,4})\s*ккал/);
    if (calorieMatch) {
      const targetCal = parseInt(calorieMatch[1]);
      results = results.filter(r => Math.abs(r.kbju.kcal - targetCal) <= 100);
    }
    
    // Check for ingredients
    if (lowerQuery.includes('курица') || lowerQuery.includes('куриная')) {
      results = results.filter(r => r.ingredients.some(ing => ing.toLowerCase().includes('курин')));
    }
    
    if (lowerQuery.includes('творог')) {
      results = results.filter(r => r.ingredients.some(ing => ing.toLowerCase().includes('творог')));
    }
    
    // Limit results
    return results.slice(0, 3);
  }
  
  renderAIRecipeResults(recipes, explanation) {
    const container = document.getElementById('ai-recipe-results');
    if (!container) return;
    
    if (!recipes || recipes.length === 0) {
      container.innerHTML = '<div class="empty-state"><div class="empty-state-icon">😕</div><p>Не найдено подходящих рецептов</p></div>';
      return;
    }
    
    // Map API recipes to local recipes (for demo)
    const localRecipes = recipes.map(r => {
      // Try to find matching local recipe by name or ID
      const local = SAMPLE_RECIPES.find(lr => 
        lr.id === r.id || lr.title.toLowerCase().includes(r.title?.toLowerCase() || '')
      ) || SAMPLE_RECIPES[Math.floor(Math.random() * SAMPLE_RECIPES.length)];
      
      return { ...local, aiExplanation: r.explanation || explanation };
    });
    
    container.innerHTML = `
      ${explanation ? `<div class="ai-explanation">💡 ${this.escapeHtml(explanation)}</div>` : ''}
      ${localRecipes.map(recipe => {
        const card = this.renderRecipeCard(recipe);
        // Add AI badge
        return card.replace('<div class="recipe-content">', '<div class="recipe-content"><span class="ai-badge">🤖 AI suggest</span>');
      }).join('')}
    `;
  }
  
  renderIngredientChips() {
    const container = document.getElementById('ingredient-chips');
    container.innerHTML = COMMON_INGREDIENTS.map(ing => `
      <div class="ingredient-chip" onclick="app.toggleIngredient('${ing}')">
        ${ing}
      </div>
    `).join('');
  }
  
  toggleIngredient(ingredient) {
    const index = this.selectedIngredients.indexOf(ingredient);
    if (index > -1) {
      this.selectedIngredients.splice(index, 1);
    } else {
      this.selectedIngredients.push(ingredient);
    }
    
    // Update visual state
    document.querySelectorAll('.ingredient-chip').forEach(chip => {
      const ing = chip.textContent.trim();
      if (this.selectedIngredients.includes(ing)) {
        chip.classList.add('selected');
      } else {
        chip.classList.remove('selected');
      }
    });
  }
  
  searchByIngredients() {
    if (this.selectedIngredients.length === 0) {
      alert('Выберите хотя бы один ингредиент');
      return;
    }
    
    const container = document.getElementById('pantry-recipes');
    
    // Find recipes that contain any of the selected ingredients
    const matches = SAMPLE_RECIPES.filter(recipe => {
      const recipeIngredients = recipe.ingredients.join(' ').toLowerCase();
      return this.selectedIngredients.some(ing => 
        recipeIngredients.includes(ing.toLowerCase())
      );
    });
    
    if (matches.length === 0) {
      container.innerHTML = '<div class="empty-state"><div class="empty-state-icon">😕</div><p>Не найдено рецептов с выбранными ингредиентами. Попробуйте другие!</p></div>';
      return;
    }
    
    container.innerHTML = matches.map(recipe => this.renderRecipeCard(recipe)).join('');
  }
  
  renderKbjuMatch() {
    // Display daily target
    const targetContainer = document.getElementById('kbju-daily-target');
    targetContainer.innerHTML = `
      <div class="kbju-col">
        <strong>${this.user.target.kcal}</strong>
        <span>ккал</span>
      </div>
      <div class="kbju-col">
        <strong>${this.user.target.protein}г</strong>
        <span>Белки</span>
      </div>
      <div class="kbju-col">
        <strong>${this.user.target.fat}г</strong>
        <span>Жиры</span>
      </div>
      <div class="kbju-col">
        <strong>${this.user.target.carbs}г</strong>
        <span>Углеводы</span>
      </div>
    `;
    
    // Find recipes that fit the target (within 10% tolerance)
    const container = document.getElementById('kbju-recipes');
    const matches = SAMPLE_RECIPES.filter(recipe => {
      const kcalMatch = Math.abs(recipe.kbju.kcal - (this.user.target.kcal / 3)) <= (this.user.target.kcal / 3) * 0.3;
      return kcalMatch;
    }).sort((a, b) => {
      // Sort by how close they are to target
      const aDiff = Math.abs(a.kbju.kcal - (this.user.target.kcal / 3));
      const bDiff = Math.abs(b.kbju.kcal - (this.user.target.kcal / 3));
      return aDiff - bDiff;
    });
    
    if (matches.length === 0) {
      container.innerHTML = '<div class="empty-state"><div class="empty-state-icon">🔍</div><p>Не найдено подходящих рецептов</p></div>';
      return;
    }
    
    container.innerHTML = matches.map(recipe => this.renderRecipeCard(recipe)).join('');
  }
  
  renderShoppingList() {
    const container = document.getElementById('shopping-list-content');
    
    if (this.user.shoppingList.length === 0) {
      container.innerHTML = '<div class="empty-state"><div class="empty-state-icon">🛒</div><p>Список покупок пуст</p><p style="font-size: 14px; color: var(--color-text-secondary); margin-top: 8px;">Добавьте рецепты, чтобы собрать ингредиенты</p></div>';
      return;
    }
    
    const html = `
      <div class="shopping-list">
        ${this.user.shoppingList.map((item, index) => `
          <div class="shopping-item ${item.checked ? 'checked' : ''}">
            <input type="checkbox" ${item.checked ? 'checked' : ''} onchange="app.toggleShoppingItem(${index})" />
            <span>${item.name}</span>
          </div>
        `).join('')}
      </div>
      
      <button class="btn btn-secondary" style="width: 100%; margin-top: 20px;" onclick="app.clearCheckedItems()">
        Очистить отмеченные
      </button>
    `;
    
    container.innerHTML = html;
  }
  
  toggleShoppingItem(index) {
    this.user.shoppingList[index].checked = !this.user.shoppingList[index].checked;
  }
  
  clearCheckedItems() {
    this.user.shoppingList = this.user.shoppingList.filter(item => !item.checked);
    this.renderShoppingList();
  }
  
  selectCuisine(cuisine) {
    document.querySelectorAll('.cuisine-btn').forEach(btn => btn.classList.remove('selected'));
    event.target.classList.add('selected');
    
    const data = GUEST_MODE_DATA[cuisine] || GUEST_MODE_DATA.other;
    const container = document.getElementById('guest-plan-content');
    
    container.innerHTML = `
      <div class="guest-plan">
        <div class="plan-section">
          <h3>📋 План на день</h3>
          <p>${data.macro_plan}</p>
        </div>
        
        <div class="plan-section">
          <h3>✅ Безопасные выборы</h3>
          <ul class="plan-list">
            ${data.safe_choices.map(choice => `<li>${choice}</li>`).join('')}
          </ul>
        </div>
        
        <div class="plan-section">
          <h3>💚 Мягкая компенсация</h3>
          <p>${data.compensation}</p>
        </div>
      </div>
    `;
  }
  
  startBreathing() {
    const circle = document.getElementById('breathing-circle');
    const timer = document.getElementById('sos-timer');
    const btn = document.getElementById('start-breathing-btn');
    
    if (this.breathingInterval) {
      // Stop
      clearInterval(this.breathingInterval);
      this.breathingInterval = null;
      this.breathingTimeLeft = 60;
      timer.textContent = '60';
      btn.textContent = 'Начать практику';
      circle.textContent = 'Вдох';
      return;
    }
    
    // Start
    btn.textContent = 'Остановить';
    let phase = 0;
    const phases = ['Вдох', 'Задержка', 'Выдох', 'Задержка'];
    
    this.breathingInterval = setInterval(() => {
      this.breathingTimeLeft--;
      timer.textContent = this.breathingTimeLeft;
      
      if (this.breathingTimeLeft % 4 === 0) {
        phase = (phase + 1) % 4;
        circle.textContent = phases[phase];
      }
      
      if (this.breathingTimeLeft <= 0) {
        clearInterval(this.breathingInterval);
        this.breathingInterval = null;
        this.breathingTimeLeft = 60;
        timer.textContent = '60';
        btn.textContent = 'Начать заново';
        circle.textContent = 'Готово!';
      }
    }, 1000);
  }
  
  renderProfile() {
    const goalMap = {
      lose: 'Снизить вес',
      maintain: 'Поддерживать вес',
      gain: 'Набрать массу'
    };
    
    document.getElementById('profile-goal').textContent = goalMap[this.user.goal];
    
    // Update mood selector
    this.setMood(this.user.mood);
    
    // Update backend URL input
    this.loadBackendUrl();
    
    document.getElementById('profile-kbju').innerHTML = `
      <div class="kbju-col">
        <strong>${this.user.target.kcal}</strong>
        <span>ккал</span>
      </div>
      <div class="kbju-col">
        <strong>${this.user.target.protein}г</strong>
        <span>Белки</span>
      </div>
      <div class="kbju-col">
        <strong>${this.user.target.fat}г</strong>
        <span>Жиры</span>
      </div>
      <div class="kbju-col">
        <strong>${this.user.target.carbs}г</strong>
        <span>Углеводы</span>
      </div>
    `;
  }
  
  resetApp() {
    if (confirm('Вы уверены? Все данные будут сброшены.')) {
      this.user = {
        goal: 'maintain',
        target: { kcal: 1800, protein: 120, fat: 60, carbs: 160 },
        savedRecipes: [],
        shoppingList: [],
        daysUsing: 1
      };
      this.showScreen('onboarding-screen');
    }
  }
}

// Initialize app
const app = new NutritionApp();