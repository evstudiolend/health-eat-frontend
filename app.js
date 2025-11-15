// ========== HealthEat FRONTEND ==========
// Полностью переписанный app.js с поддержкой AI-рецептов, локального стейта и интеграции с backend

// -------------------------------------------------------------
// 1. Константы и настройки
// -------------------------------------------------------------

const API_BASE_DEFAULT = "https://nutrition-backend-v2-a3nv.vercel.app";

// Генерация уникальных ID для AI-рецептов
function generateId() {
  return "ai_" + Math.random().toString(36).substr(2, 9);
}

// -------------------------------------------------------------
// 2. Рецепты по умолчанию (каталог)
// -------------------------------------------------------------

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
  "Куриная грудка",
  "Яйца",
  "Творог",
  "Греческий йогурт",
  "Гречка",
  "Рис",
  "Овсянка",
  "Паста",
  "Помидоры",
  "Огурцы",
  "Перец",
  "Лук",
  "Чеснок",
  "Морковь",
  "Брокколи",
  "Кабачок",
  "Рыба",
  "Тунец консерв.",
  "Молоко",
  "Сыр",
  "Оливковое масло",
  "Лимон"
];

// -------------------------------------------------------------
// 3. LocalStorage helpers
// -------------------------------------------------------------

function saveUserState(user) {
  localStorage.setItem("nutrition_user", JSON.stringify(user));
}

function loadUserState() {
  try {
    return JSON.parse(localStorage.getItem("nutrition_user")) || null;
  } catch {
    return null;
  }
}

function saveUserAIRecipes(list) {
  localStorage.setItem("nutrition_ai_recipes", JSON.stringify(list));
}

function loadUserAIRecipes() {
  try {
    return JSON.parse(localStorage.getItem("nutrition_ai_recipes")) || [];
  } catch {
    return [];
  }
}

// -------------------------------------------------------------
// 4. Класс приложения
// -------------------------------------------------------------

class NutritionApp {
  constructor() {
    const savedUser = loadUserState();

    this.user = savedUser || {
      goal: "maintain",
      target: { kcal: 1800, protein: 120, fat: 60, carbs: 160 },
      savedRecipes: [],
      shoppingList: [],
      mood: 3,
      daysUsing: 1,
      backendUrl: API_BASE_DEFAULT
    };

    this.catalogRecipes = [...SAMPLE_RECIPES];
    this.aiRecipes = loadUserAIRecipes();

    this.chatHistory = [];
    this.selectedIngredients = [];
    this.recipeScope = "curated"; // curated | ai | mine
    this.filters = { category: "all", quick: false, office: false };
    this.currentScreen = "onboarding-screen";
    this.previousScreen = null;

    this.breathingInterval = null;
    this.breathingTimeLeft = 60;

    this.init();
  }

  // -----------------------------------------------------------
  // INIT
  // -----------------------------------------------------------
  init() {
    // объединяем каталог + ранее сохранённые AI-рецепты
    this.catalogRecipes = [...SAMPLE_RECIPES];
    // AI рецепты хранятся отдельно; при показе берем merged

    this.renderIngredientChips();
    this.loadBackendUrl();
    this.checkBackendHealth();
    this.showScreen("onboarding-screen");
  }

  // -----------------------------------------------------------
  // Backend health check
  // -----------------------------------------------------------
  async checkBackendHealth() {
    try {
      const res = await fetch(`${this.user.backendUrl}/api/health`, {
        method: "GET",
        headers: { "Content-Type": "application/json" }
      });
      if (res.ok) {
        console.log("Backend OK");
        this.showBackendStatus("✓ Backend подключен", "success");
      } else {
        this.showBackendStatus(`⚠ Ошибка: ${res.status}`, "error");
      }
    } catch (e) {
      console.warn("Backend unreachable:", e);
      this.showBackendStatus("✗ Нет связи с backend", "error");
    }
  }

  loadBackendUrl() {
    const input = document.getElementById("backend-url");
    if (input) input.value = this.user.backendUrl;
  }

  saveBackendUrl() {
    const input = document.getElementById("backend-url");
    if (!input) return;
    const url = input.value.trim();
    if (!url) {
      alert("Введите URL backend");
      return;
    }
    this.user.backendUrl = url;
    saveUserState(this.user);
    this.showBackendStatus("Сохраняю и проверяю…", "info");
    this.checkBackendHealth();
  }

  showBackendStatus(message, type) {
    const statusDiv = document.getElementById("backend-status");
    if (!statusDiv) return;

    statusDiv.style.display = "block";
    statusDiv.textContent = message;

    if (type === "success") {
      statusDiv.style.background = "rgba(0, 160, 0, 0.12)";
      statusDiv.style.color = "#00a000";
      statusDiv.style.border = "1px solid #00a000";
    } else if (type === "error") {
      statusDiv.style.background = "rgba(200, 0, 0, 0.12)";
      statusDiv.style.color = "#c00000";
      statusDiv.style.border = "1px solid #c00000";
    } else {
      statusDiv.style.background = "var(--color-bg-1)";
      statusDiv.style.color = "var(--color-text-secondary)";
      statusDiv.style.border = "1px solid var(--color-border)";
    }
  }

  // -----------------------------------------------------------
  // Навигация
  // -----------------------------------------------------------
  showScreen(screenId) {
    this.previousScreen = this.currentScreen;
    this.currentScreen = screenId;

    document.querySelectorAll(".screen").forEach(s =>
      s.classList.remove("active")
    );
    const screen = document.getElementById(screenId);
    if (screen) screen.classList.add("active");

    // Хедер, навигация, SOS-кнопка
    const header = document.getElementById("header");
    const bottomNav = document.getElementById("bottom-nav");
    const sosFab = document.getElementById("sos-fab");
    const hideUI = ["onboarding-screen", "goal-screen", "kbju-screen"];

    if (header && bottomNav && sosFab) {
      if (hideUI.includes(screenId)) {
        header.style.display = "none";
        bottomNav.style.display = "none";
        sosFab.style.display = "none";
      } else {
        header.style.display = "block";
        bottomNav.style.display = "flex";
        sosFab.style.display =
          screenId === "sos-screen" ? "none" : "block";
      }
    }

    this.updateNavigation();
    this.loadScreenContent(screenId);
  }

  navigateTo(screenId) {
    this.showScreen(screenId);
  }

  updateNavigation() {
    document.querySelectorAll(".nav-item").forEach(item => {
      const screen = item.dataset.screen;
      item.classList.toggle("active", screen === this.currentScreen);
    });
  }

  loadScreenContent(screenId) {
    switch (screenId) {
      case "dashboard-screen":
        this.updateDashboardStats();
        break;
      case "recipes-screen":
        this.renderAllRecipes();
        break;
      case "quick-screen":
        this.renderQuickRecipes();
        break;
      case "ai-chat-screen":
        this.renderChatHistory();
        break;
      case "kbju-match-screen":
        this.renderKbjuMatch();
        break;
      case "shopping-screen":
        this.renderShoppingList();
        break;
      case "profile-screen":
        this.renderProfile();
        break;
    }
  }

  // -----------------------------------------------------------
  // Онбординг / цель
  // -----------------------------------------------------------

  startGoalSelection() {
    this.showScreen("goal-screen");
  }

  selectGoal(goal) {
    this.user.goal = goal;

    const defaults = {
      lose: { kcal: 1600, protein: 120, fat: 50, carbs: 140 },
      maintain: { kcal: 1800, protein: 120, fat: 60, carbs: 160 },
      gain: { kcal: 2200, protein: 140, fat: 70, carbs: 200 }
    };

    const t = defaults[goal];

    document.getElementById("target-kcal").value = t.kcal;
    document.getElementById("target-protein").value = t.protein;
    document.getElementById("target-fat").value = t.fat;
    document.getElementById("target-carbs").value = t.carbs;

    saveUserState(this.user);
    this.showScreen("kbju-screen");
  }

  completeOnboarding() {
    this.user.target = {
      kcal: parseInt(document.getElementById("target-kcal").value),
      protein: parseInt(document.getElementById("target-protein").value),
      fat: parseInt(document.getElementById("target-fat").value),
      carbs: parseInt(document.getElementById("target-carbs").value)
    };

    saveUserState(this.user);
    this.showScreen("dashboard-screen");
  }

  // -----------------------------------------------------------
  // Дашборд
  // -----------------------------------------------------------

  updateDashboardStats() {
    const savedCount = document.getElementById("saved-count");
    const daysUsing = document.getElementById("days-using");

    if (savedCount) savedCount.textContent = this.user.savedRecipes.length;
    if (daysUsing) daysUsing.textContent = this.user.daysUsing || 1;
  }

  // -----------------------------------------------------------
  // Scope (curated / ai / mine) + фильтры
  // -----------------------------------------------------------

  setRecipeScope(scope) {
    this.recipeScope = scope;
    document.querySelectorAll(".scope-btn").forEach(btn => {
      btn.classList.toggle("active", btn.dataset.scope === scope);
    });
    this.renderAllRecipes();
  }

  setFilter(type, value) {
    if (type === "category") {
      this.filters.category = value;
    }
    this.renderAllRecipes();
  }

  toggleQuickFilter() {
    this.filters.quick = !this.filters.quick;
    const btn = document.querySelector('[data-filter="quick"]');
    if (btn) btn.classList.toggle("active", this.filters.quick);
    this.renderAllRecipes();
  }

  toggleOfficeFilter() {
    this.filters.office = !this.filters.office;
    const btn = document.querySelector('[data-filter="office"]');
    if (btn) btn.classList.toggle("active", this.filters.office);
    this.renderAllRecipes();
  }

  // -----------------------------------------------------------
  // Рецепты: сбор, фильтрация, рендер
  // -----------------------------------------------------------

  getAllRecipesMerged() {
    return [...this.catalogRecipes, ...this.aiRecipes];
  }

  getFilteredRecipes() {
    let list = this.getAllRecipesMerged();

    if (this.recipeScope === "curated") {
      list = list.filter(r => r.visibility === "curated");
    } else if (this.recipeScope === "ai") {
      list = list.filter(r => r.visibility === "ai");
    } else if (this.recipeScope === "mine") {
      list = list.filter(r => this.user.savedRecipes.includes(r.id));
    }

    if (this.filters.category && this.filters.category !== "all") {
      list = list.filter(r => r.category === this.filters.category);
    }

    if (this.filters.quick) {
      list = list.filter(r => (r.cook_time || 0) <= 10);
    }

    if (this.filters.office) {
      list = list.filter(r => r.office_friendly);
    }

    return list;
  }

  renderAllRecipes() {
    const container = document.getElementById("all-recipes");
    if (!container) return;

    const recipes = this.getFilteredRecipes();

    if (!recipes.length) {
      container.innerHTML = `
        <div class="empty-state">
          <div class="empty-state-icon">🔍</div>
          <p>Нет рецептов по выбранным условиям</p>
        </div>`;
      return;
    }

    container.innerHTML = recipes.map(r => this.renderRecipeCard(r)).join("");
  }

  renderQuickRecipes() {
    const container = document.getElementById("quick-recipes");
    if (!container) return;

    const recipes = this.getAllRecipesMerged().filter(
      r => r.cook_time <= 10 && r.office_friendly
    );

    if (!recipes.length) {
      container.innerHTML = `
        <div class="empty-state">
          <div class="empty-state-icon">🔍</div>
          <p>Нет быстрых офисных рецептов</p>
        </div>`;
      return;
    }

    container.innerHTML = recipes
      .slice(0, 5)
      .map(r => this.renderRecipeCard(r))
      .join("");
  }

  renderRecipeCard(recipe) {
    const isSaved = this.user.savedRecipes.includes(recipe.id);
    const difficultyMap = { easy: "⭐", medium: "⭐⭐", hard: "⭐⭐⭐" };

    return `
      <div class="recipe-card" onclick="app.showRecipeDetail('${recipe.id}')">
        <div class="recipe-image">${recipe.photo || "🤖"}</div>
        <div class="recipe-content">
          
          ${recipe.visibility === "ai" ? '<span class="ai-badge">🤖 AI</span>' : ""}

          <div class="recipe-header">
            <div class="recipe-title">${recipe.title}</div>
            <div class="recipe-author">${recipe.author || "AI-рецепт"}</div>
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
            <span class="meta-badge">⏱️ ${recipe.cook_time || 10} мин</span>
            <span class="meta-badge">
              ${difficultyMap[recipe.difficulty || "easy"]}
            </span>
            ${
              recipe.office_friendly
                ? '<span class="meta-badge">💼 Офис</span>'
                : ""
            }
          </div>

          <div class="recipe-tags">
            ${(recipe.tags || [])
              .slice(0, 3)
              .map(tag => `<span class="tag">${tag}</span>`)
              .join("")}
          </div>

          <div class="recipe-actions" onclick="event.stopPropagation()">
            <button class="btn btn-sm ${
              isSaved ? "btn-secondary" : ""
            }" onclick="app.toggleSaveRecipe('${recipe.id}')">
              ${isSaved ? "✓ Сохранено" : "💾 Сохранить"}
            </button>
            <button class="btn btn-sm btn-secondary" onclick="app.addToShoppingList('${recipe.id}')">
              🛒
            </button>
          </div>
        </div>
      </div>
    `;
  }

  // -----------------------------------------------------------
  // Детальная карточка
  // -----------------------------------------------------------

  getRecipeById(id) {
    return (
      this.catalogRecipes.find(r => String(r.id) === String(id)) ||
      this.aiRecipes.find(r => String(r.id) === String(id)) ||
      null
    );
  }

  showRecipeDetail(recipeId) {
    const recipe = this.getRecipeById(recipeId);
    if (!recipe) return;

    const container = document.getElementById("recipe-detail-content");
    if (!container) return;

    const isSaved = this.user.savedRecipes.includes(recipe.id);
    const difficultyMap = { easy: "Легко", medium: "Средне", hard: "Сложно" };

    container.innerHTML = `
      <div class="recipe-hero">${recipe.photo || "🤖"}</div>
      
      <h2>${recipe.title}</h2>
      <p style="color: var(--color-text-secondary); margin-bottom: 24px;">
        ${recipe.author || "Сгенерировано AI"}
      </p>

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
        <span class="meta-badge">⏱️ ${recipe.cook_time || 10} мин</span>
        <span class="meta-badge">${
          difficultyMap[recipe.difficulty || "easy"]
        }</span>
        <span class="meta-badge">🍽️ ${recipe.servings || 1} порц.</span>
        ${
          recipe.office_friendly
            ? '<span class="meta-badge">💼 Офис</span>'
            : ""
        }
      </div>

      <h3>Ингредиенты</h3>
      <ul class="ingredients-list">
        ${(recipe.ingredients || []).map(ing => `<li>${ing}</li>`).join("")}
      </ul>

      <h3>Приготовление</h3>
      <ol class="steps-list">
        ${(recipe.steps || [])
          .map((step, i) => `<li data-step="${i + 1}">${step}</li>`)
          .join("")}
      </ol>

      <div style="display: flex; gap: 12px; margin-top: 24px;">
        <button class="btn ${
          isSaved ? "btn-secondary" : ""
        }" style="flex: 1;" onclick="app.toggleSaveRecipe('${recipe.id}')">
          ${isSaved ? "✓ Сохранено" : "💾 Сохранить рецепт"}
        </button>
        <button class="btn btn-secondary" style="flex: 1;" onclick="app.addToShoppingList('${recipe.id}')">
          🛒 В покупки
        </button>
      </div>

      ${
        recipe.visibility !== "ai"
          ? `<button class="btn btn-secondary" style="width: 100%; margin-top: 12px;" onclick="app.suggestAlternative('${recipe.id}')">
               🔄 Надоело — предложи похожее
             </button>`
          : ""
      }
    `;

    this.showScreen("recipe-detail-screen");
  }

  toggleSaveRecipe(recipeId) {
    const idx = this.user.savedRecipes.indexOf(recipeId);
    if (idx >= 0) {
      this.user.savedRecipes.splice(idx, 1);
    } else {
      this.user.savedRecipes.push(recipeId);
    }
    saveUserState(this.user);
    // перерисуем текущий экран
    if (this.currentScreen === "recipes-screen") {
      this.renderAllRecipes();
    } else if (this.currentScreen === "recipe-detail-screen") {
      this.showRecipeDetail(recipeId);
    }
  }

  addToShoppingList(recipeId) {
    const recipe = this.getRecipeById(recipeId);
    if (!recipe) return;

    recipe.ingredients.forEach(ing => {
      if (!this.user.shoppingList.find(i => i.name === ing)) {
        this.user.shoppingList.push({ name: ing, checked: false });
      }
    });

    saveUserState(this.user);
    alert(`Ингредиенты из "${recipe.title}" добавлены в список покупок!`);
  }

  // -----------------------------------------------------------
  // AI: нормализация рецепта
  // -----------------------------------------------------------

  normalizeAIRecipe(r) {
    return {
      id: generateId(),
      title: r.title || "Новое блюдо",
      author: "AI",
      category: "ai",
      visibility: "ai",
      photo: "🤖",
      cook_time: r.cook_time || Math.floor(7 + Math.random() * 13),
      difficulty: "easy",
      office_friendly: true,
      tags: r.tags || ["AI-рецепт", "быстрое"],
      servings: r.servings || 1,
      kbju: {
        kcal: r.kcal || 300,
        protein: r.protein || 15,
        fat: r.fat || 10,
        carbs: r.carbs || 25
      },
      ingredients: r.ingredients || ["Ингредиенты не указаны"],
      steps: r.steps || ["Шаги приготовления не указаны"]
    };
  }

  // -----------------------------------------------------------
  // AI Chat
  // -----------------------------------------------------------

  renderChatHistory() {
    const container = document.getElementById("chat-messages");
    if (!container) return;

    const html = this.chatHistory
      .map(msg => {
        const cls = msg.role === "user" ? "user" : "assistant";
        return `
          <div class="chat-message ${cls}">
            <div class="message-bubble">${this.escapeHtml(msg.content)}</div>
          </div>`;
      })
      .join("");

    container.innerHTML = html;
    container.scrollTop = container.scrollHeight;
  }

  async sendChatMessage() {
    const input = document.getElementById("chat-input");
    if (!input) return;

    const text = input.value.trim();
    if (!text) return;

    this.chatHistory.push({ role: "user", content: text });
    input.value = "";
    this.renderChatHistory();

    // Loading message
    this.chatHistory.push({
      role: "assistant",
      content: "🤖 Думаю над вашим запросом..."
    });
    this.renderChatHistory();

    try {
      const response = await fetch(`${this.user.backendUrl}/api/ai/chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: text,
          userKBJU: this.user.target,
          mood: this.user.mood
        })
      });

      // удалить "думаю..."
      this.chatHistory.pop();

      if (!response.ok) {
        throw new Error("AI недоступен");
      }

      const data = await response.json();

      this.chatHistory.push({
        role: "assistant",
        content: data.message || "Готово!"
      });
      this.renderChatHistory();

      if (Array.isArray(data.recipes) && data.recipes.length > 0) {
        const normalized = data.recipes.map(r => this.normalizeAIRecipe(r));
        this.aiRecipes.push(...normalized);
        saveUserAIRecipes(this.aiRecipes);
        this.renderAIRecipeResults(normalized);
      }
    } catch (err) {
      console.error("AI chat error:", err);
      this.chatHistory.pop(); // убрать "думаю...", если остался
      this.chatHistory.push({
        role: "assistant",
        content:
          "⚠️ Не могу связаться с AI. Попробуйте позже или воспользуйтесь готовыми рецептами."
      });
      this.renderChatHistory();
    }
  }

  renderAIRecipeResults(recipes) {
    const container = document.getElementById("ai-recipe-results");
    if (!container) return;

    if (!recipes.length) {
      container.innerHTML = `
        <div class="empty-state">
          <div class="empty-state-icon">😕</div>
          <p>AI не предложил рецептов</p>
        </div>`;
      return;
    }

    container.innerHTML = recipes
      .map(r => this.renderRecipeCard(r))
      .join("");
  }

  // -----------------------------------------------------------
  // AI rotation: "Надоело — предложи похожее"
  // -----------------------------------------------------------

  async suggestAlternative(recipeId) {
    const recipe = this.getRecipeById(recipeId);
    if (!recipe) return;

    const content = document.getElementById("recipe-detail-content");
    if (!content) return;

    const loadingDiv = document.createElement("div");
    loadingDiv.className = "loading-message";
    loadingDiv.innerHTML =
      '<div class="loading-spinner"></div><span>Подбираю альтернативы…</span>';
    content.appendChild(loadingDiv);

    try {
      const response = await fetch(`${this.user.backendUrl}/api/ai/rotate`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          recipeId: recipe.id,
          recipeName: recipe.title,
          kbju: recipe.kbju,
          category: recipe.category
        })
      });

      loadingDiv.remove();

      if (!response.ok) throw new Error("AI недоступен");

      const data = await response.json();

      if (data.alternatives && data.alternatives.length) {
        const alt = data.alternatives[0];

        const normalized = this.normalizeAIRecipe({
          title: alt.title,
          kcal: alt.kbju?.kcal,
          protein: alt.kbju?.protein,
          fat: alt.kbju?.fat,
          carbs: alt.kbju?.carbs,
          ingredients: alt.ingredients,
          steps: alt.steps
        });

        this.aiRecipes.push(normalized);
        saveUserAIRecipes(this.aiRecipes);

        this.showRecipeDetail(normalized.id);
        return;
      }
    } catch (err) {
      console.warn("AI rotate error:", err);
      loadingDiv.remove();
    }

    // fallback — локальный подбор по категории и калорийности
    const alternatives = this.catalogRecipes.filter(
      r =>
        r.id !== recipe.id &&
        r.category === recipe.category &&
        Math.abs(r.kbju.kcal - recipe.kbju.kcal) <= 120
    );

    if (alternatives.length) {
      const alt = alternatives[Math.floor(Math.random() * alternatives.length)];
      this.showRecipeDetail(alt.id);
    } else {
      alert("Похожих рецептов нет — попробуйте другой!");
    }
  }

  // -----------------------------------------------------------
  // Ингредиенты — выбор и поиск
  // -----------------------------------------------------------

  renderIngredientChips() {
    const container = document.getElementById("ingredient-chips");
    if (!container) return;

    container.innerHTML = COMMON_INGREDIENTS.map(
      ing => `
        <div class="ingredient-chip" onclick="app.toggleIngredient('${ing}')">
          ${ing}
        </div>`
    ).join("");
  }

  toggleIngredient(ingredient) {
    const idx = this.selectedIngredients.indexOf(ingredient);
    if (idx >= 0) this.selectedIngredients.splice(idx, 1);
    else this.selectedIngredients.push(ingredient);

    document.querySelectorAll(".ingredient-chip").forEach(chip => {
      const ing = chip.textContent.trim();
      chip.classList.toggle(
        "selected",
        this.selectedIngredients.includes(ing)
      );
    });
  }

  searchByIngredients() {
    if (this.selectedIngredients.length === 0) {
      alert("Выберите хотя бы один ингредиент");
      return;
    }

    const container = document.getElementById("pantry-recipes");
    if (!container) return;

    const matches = this.getAllRecipesMerged().filter(recipe => {
      const ingText = recipe.ingredients.join(" ").toLowerCase();
      return this.selectedIngredients.some(ing =>
        ingText.includes(ing.toLowerCase())
      );
    });

    if (!matches.length) {
      container.innerHTML = `
        <div class="empty-state">
          <div class="empty-state-icon">😕</div>
          <p>Не найдено рецептов с выбранными ингредиентами</p>
        </div>`;
      return;
    }

    container.innerHTML = matches.map(r => this.renderRecipeCard(r)).join("");
  }

  // -----------------------------------------------------------
  // Подбор под КБЖУ (локальный)
  // -----------------------------------------------------------

  renderKbjuMatch() {
    const targetContainer = document.getElementById("kbju-daily-target");
    if (targetContainer) {
      targetContainer.innerHTML = `
        <div class="kbju-col">
          <strong>${this.user.target.kcal}</strong><span>ккал</span>
        </div>
        <div class="kbju-col">
          <strong>${this.user.target.protein}г</strong><span>Белки</span>
        </div>
        <div class="kbju-col">
          <strong>${this.user.target.fat}г</strong><span>Жиры</span>
        </div>
        <div class="kbju-col">
          <strong>${this.user.target.carbs}г</strong><span>Углеводы</span>
        </div>
      `;
    }

    const container = document.getElementById("kbju-recipes");
    if (!container) return;

    const perMeal = this.user.target.kcal / 3;

    const matches = this.getAllRecipesMerged()
      .filter(r => Math.abs(r.kbju.kcal - perMeal) <= perMeal * 0.3)
      .sort(
        (a, b) =>
          Math.abs(a.kbju.kcal - perMeal) - Math.abs(b.kbju.kcal - perMeal)
      );

    if (!matches.length) {
      container.innerHTML = `
        <div class="empty-state">
          <div class="empty-state-icon">🔍</div>
          <p>Не найдено подходящих рецептов</p>
        </div>`;
      return;
    }

    container.innerHTML = matches.map(r => this.renderRecipeCard(r)).join("");
  }

  // -----------------------------------------------------------
  // Список покупок
  // -----------------------------------------------------------

  renderShoppingList() {
    const container = document.getElementById("shopping-list-content");
    if (!container) return;

    if (!this.user.shoppingList.length) {
      container.innerHTML = `
        <div class="empty-state">
          <div class="empty-state-icon">🛒</div>
          <p>Список покупок пуст</p>
          <p style="font-size: 14px; color: var(--color-text-secondary); margin-top: 8px;">
            Добавьте рецепты, чтобы собрать ингредиенты
          </p>
        </div>`;
      return;
    }

    container.innerHTML = `
      <div class="shopping-list">
        ${this.user.shoppingList
          .map(
            (item, index) => `
          <div class="shopping-item ${
            item.checked ? "checked" : ""
          }">
            <input type="checkbox" ${
              item.checked ? "checked" : ""
            } onchange="app.toggleShoppingItem(${index})" />
            <span>${item.name}</span>
          </div>`
          )
          .join("")}
      </div>

      <button class="btn btn-secondary" style="width: 100%; margin-top: 20px;" onclick="app.clearCheckedItems()">
        Очистить отмеченные
      </button>
    `;
  }

  toggleShoppingItem(index) {
    this.user.shoppingList[index].checked =
      !this.user.shoppingList[index].checked;
    saveUserState(this.user);
  }

  clearCheckedItems() {
    this.user.shoppingList = this.user.shoppingList.filter(
      item => !item.checked
    );
    saveUserState(this.user);
    this.renderShoppingList();
  }

  // -----------------------------------------------------------
  // SOS breathing
  // -----------------------------------------------------------

  startBreathing() {
    const circle = document.getElementById("breathing-circle");
    const timer = document.getElementById("sos-timer");
    const btn = document.getElementById("start-breathing-btn");

    if (!circle || !timer || !btn) return;

    if (this.breathingInterval) {
      clearInterval(this.breathingInterval);
      this.breathingInterval = null;
      this.breathingTimeLeft = 60;
      timer.textContent = "60";
      btn.textContent = "Начать практику";
      circle.textContent = "Вдох";
      return;
    }

    btn.textContent = "Остановить";
    let phase = 0;
    const phases = ["Вдох", "Задержка", "Выдох", "Задержка"];

    this.breathingTimeLeft = 60;
    timer.textContent = "60";
    circle.textContent = phases[phase];

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
        timer.textContent = "60";
        btn.textContent = "Начать заново";
        circle.textContent = "Готово!";
      }
    }, 1000);
  }

  // -----------------------------------------------------------
  // Профиль + настроение
  // -----------------------------------------------------------

  setMood(mood) {
    this.user.mood = mood;
    saveUserState(this.user);

    document.querySelectorAll(".mood-btn").forEach(btn => {
      btn.classList.toggle("selected", parseInt(btn.dataset.mood) === mood);
    });
  }

  renderProfile() {
    const goalMap = {
      lose: "Снизить вес",
      maintain: "Поддерживать вес",
      gain: "Набрать массу"
    };

    const goalEl = document.getElementById("profile-goal");
    const kbjuEl = document.getElementById("profile-kbju");

    if (goalEl) goalEl.textContent = goalMap[this.user.goal];
    if (kbjuEl) {
      kbjuEl.innerHTML = `
        <div class="kbju-col">
          <strong>${this.user.target.kcal}</strong><span>ккал</span>
        </div>
        <div class="kbju-col">
          <strong>${this.user.target.protein}г</strong><span>Белки</span>
        </div>
        <div class="kbju-col">
          <strong>${this.user.target.fat}г</strong><span>Жиры</span>
        </div>
        <div class="kbju-col">
          <strong>${this.user.target.carbs}г</strong><span>Углеводы</span>
        </div>
      `;
    }

    this.setMood(this.user.mood);
    this.loadBackendUrl();
  }

  // -----------------------------------------------------------
  // Utility
  // -----------------------------------------------------------

  escapeHtml(str) {
    const div = document.createElement("div");
    div.innerText = str;
    return div.innerHTML;
  }

  resetApp() {
    if (!confirm("Вы уверены? Все данные будут сброшены.")) return;
    localStorage.removeItem("nutrition_user");
    localStorage.removeItem("nutrition_ai_recipes");
    window.location.reload();
  }
}

// -------------------------------------------------------------
// 5. Глобальный экземпляр
// -------------------------------------------------------------

const app = new NutritionApp();
window.app = app;
