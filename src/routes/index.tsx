import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, useMemo } from "react";
import {
  Search,
  Heart,
  ShoppingBag,
  User,
  Menu,
  MessageCircle,
  ArrowUpRight,
  Truck,
  ShieldCheck,
  Globe2,
  Sparkles,
  RotateCcw,
  Headphones,
  Star,
  Instagram,
  Facebook,
  Youtube,
  X,
  Plus,
  Minus,
  Check,
  ChevronRight,
  Lock,
  Gift,
  HelpCircle,
  Trash2,
  ArrowUpDown,
  BookOpen,
  Compass
} from "lucide-react";

import hero from "@/assets/hero.jpg";
import catKanjivaram from "@/assets/cat-kanjivaram.jpg";
import catBanarasi from "@/assets/cat-banarasi.jpg";
import catOrganza from "@/assets/cat-organza.jpg";
import catBridal from "@/assets/cat-bridal.jpg";
import p1 from "@/assets/p1.jpg";
import p2 from "@/assets/p2.jpg";
import p3 from "@/assets/p3.jpg";
import p4 from "@/assets/p4.jpg";
import heritage from "@/assets/heritage.jpg";
import weddingBanner from "@/assets/wedding-banner.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "VASTRIKA — Timeless Elegance | Luxury Handloom Sarees" },
      {
        name: "description",
        content:
          "Discover VASTRIKA's luxury saree atelier — Banarasi, Kanjivaram, Organza & bridal heirlooms handwoven by India's master artisans.",
      },
      { property: "og:title", content: "VASTRIKA — Timeless Elegance" },
      {
        property: "og:description",
        content: "Heirloom sarees handwoven by India's master artisans.",
      },
      { property: "og:image", content: hero },
      { property: "twitter:image", content: hero },
    ],
  }),
  component: Home,
});

const NAV = [
  "Shop",
  "Collections",
  "Wedding",
  "About",
  "Contact"
];

const CATEGORIES = [
  { name: "Banarasi", tag: "Heirloom Silk", img: catBanarasi, filter: "Banarasi" },
  { name: "Kanjivaram", tag: "Temple Borders", img: catKanjivaram, filter: "Kanjivaram" },
  { name: "Organza", tag: "Whisper Light", img: catOrganza, filter: "Organza" },
  { name: "Bridal Atelier", tag: "Bespoke", img: catBridal, filter: "Bridal" },
];

const PRODUCTS = [
  {
    id: "p1",
    name: "Rani Banarasi",
    sub: "Pure Katan Silk · Real Antique Zari",
    priceVal: 48500,
    price: "₹ 48,500",
    img: p1,
    tag: "Bestseller",
    category: "Banarasi",
    fabric: "Banarasi Silk",
    color: "Royal Maroon",
    colorHex: "#6D1B2A",
    occasion: "Wedding",
    desc: "A timeless handwoven Banarasi masterpiece crafted in pure Katan silk. Adorned with intricate antique gold zari jaal patterns inspired by Mughal court archives.",
    specs: {
      "Fabric": "100% Pure Katan Silk",
      "Weave Type": "Kadhwa Handloom",
      "Zari": "Antique Gold Zari",
      "Saree Length": "5.5 meters",
      "Blouse Piece": "0.8 meters (included)",
    },
    care: "Dry clean only. Store in a muslin bag wrapped in soft cotton fabric. Avoid direct perfume sprays."
  },
  {
    id: "p2",
    name: "Mayura Kanjivaram",
    sub: "Mulberry Silk · Temple Border",
    priceVal: 62000,
    price: "₹ 62,000",
    img: p2,
    tag: "New",
    category: "Kanjivaram",
    fabric: "Kanjivaram Silk",
    color: "Antique Gold",
    colorHex: "#C8A54A",
    occasion: "Festive",
    desc: "Woven in Kanchipuram using premium double-warp mulberry silk. Features a broad borders showcasing traditional peacock (Mayura) motifs and signature temple architectural structures.",
    specs: {
      "Fabric": "Double Warp Mulberry Silk",
      "Weave Type": "Kanchipuram Handloom",
      "Zari": "Pure Gold & Silver Zari",
      "Saree Length": "5.5 meters",
      "Blouse Piece": "0.8 meters (included)",
    },
    care: "Dry clean only. Air out occasionally in shade. Never wash at home."
  },
  {
    id: "p3",
    name: "Chandni Organza",
    sub: "Hand Embroidered · Zardozi",
    priceVal: 36800,
    price: "₹ 36,800",
    img: p3,
    tag: "Trending",
    category: "Organza",
    fabric: "Organza",
    color: "Ivory",
    colorHex: "#FAF7F2",
    occasion: "Party Wear",
    desc: "Whisper-light ivory organza saree. Exquisitely hand-embroidered with classic zardozi work, fine dabka, and pearl work along the borders.",
    specs: {
      "Fabric": "Premium Pure Silk Organza",
      "Weave Type": "Power-loom base with handmade embroidery",
      "Embroidery": "Zardozi & Dabka work",
      "Saree Length": "5.5 meters",
      "Blouse Piece": "0.8 meters (included)",
    },
    care: "Dry clean only. Delicate embroidery, store flat and handle with utmost care."
  },
  {
    id: "p4",
    name: "Shyama Heirloom",
    sub: "Black Silk · Antique Zari",
    priceVal: 74200,
    price: "₹ 74,200",
    img: p4,
    tag: "Limited",
    category: "Bridal Atelier",
    fabric: "Banarasi Silk",
    color: "Black",
    colorHex: "#1C1C1C",
    occasion: "Wedding",
    desc: "An exceptional, limited-edition saree woven in rich Shyama black silk with rare antique dull gold zari. Represents the peak of traditional atelier mastery.",
    specs: {
      "Fabric": "Premium Katan Silk",
      "Weave Type": "Handloom Tanchoi",
      "Zari": "Dull Antique Gold Zari",
      "Saree Length": "5.5 meters",
      "Blouse Piece": "0.8 meters (included)",
    },
    care: "Dry clean only. Store wrapped in acid-free tissue paper inside a dark box."
  },
  {
    id: "p5",
    name: "Devi Crimson",
    sub: "Crimson Katan · Bridal Masterpiece",
    priceVal: 125000,
    price: "₹ 1,25,000",
    img: p1,
    tag: "Bridal Atelier",
    category: "Bridal Atelier",
    fabric: "Kanjivaram Silk",
    color: "Royal Maroon",
    colorHex: "#6D1B2A",
    occasion: "Wedding",
    desc: "The ultimate bridal handloom. Woven in deep crimson over three months, featuring solid gold borders and hand-stitched semi-precious stone embellishments.",
    specs: {
      "Fabric": "100% Pure Mulberry Silk",
      "Weave Type": "Triple Warp Korvai Handloom",
      "Zari": "Pure 24k Gold Electroplated Zari",
      "Saree Length": "5.6 meters",
      "Blouse Piece": "0.9 meters (contrasting design)",
    },
    care: "Professional preservation recommended. Dry clean only."
  },
  {
    id: "p6",
    name: "Amara Emerald",
    sub: "Emerald Silk · Shikargah Motifs",
    priceVal: 54500,
    price: "₹ 54,500",
    img: p2,
    tag: "Exclusive",
    category: "Banarasi",
    fabric: "Banarasi Silk",
    color: "Emerald",
    colorHex: "#0D5D56",
    occasion: "Festive",
    desc: "Rich emerald green Banarasi silk saree featuring rare Shikargah (hunting scene) animal and foliage motifs handwoven across the body.",
    specs: {
      "Fabric": "Pure Katan Silk",
      "Weave Type": "Kadhwa Handloom",
      "Zari": "Fine Silver Zari",
      "Saree Length": "5.5 meters",
      "Blouse Piece": "0.8 meters",
    },
    care: "Dry clean only. Refold along different lines every three months to prevent crease damage."
  },
  {
    id: "p7",
    name: "Vaikunth Kora",
    sub: "Kora Organza · Floral Gold Jaal",
    priceVal: 42500,
    price: "₹ 42,500",
    img: p3,
    category: "Organza",
    fabric: "Organza",
    color: "Ivory",
    colorHex: "#FAF7F2",
    occasion: "Festive",
    desc: "Woven in Kora silk organza, this saree features delicate floral jaal weaves in gold and silver threads, representing the ethereal lightness of festive summer days.",
    specs: {
      "Fabric": "Pure Kora Silk Organza",
      "Weave Type": "Jamdani Handloom",
      "Zari": "Sona Rupa (Gold & Silver) Zari",
      "Saree Length": "5.5 meters",
      "Blouse Piece": "0.8 meters",
    },
    care: "Dry clean only. Store hanging or flat. Avoid pinning directly."
  },
  {
    id: "p8",
    name: "Swarna Lalita",
    sub: "Tissue Silk · Zari Brocade",
    priceVal: 89000,
    price: "₹ 89,000",
    img: p4,
    tag: "Bestseller",
    category: "Bridal Atelier",
    fabric: "Banarasi Silk",
    color: "Antique Gold",
    colorHex: "#C8A54A",
    occasion: "Wedding",
    desc: "A magnificent tissue silk saree with extensive gold brocade. The fabric glows like spun gold, ideal for wedding receptions and heritage celebrations.",
    specs: {
      "Fabric": "Pure Gold Tissue Silk",
      "Weave Type": "Traditional Brocade Handloom",
      "Zari": "Pure Gold Wire Zari",
      "Saree Length": "5.5 meters",
      "Blouse Piece": "0.8 meters",
    },
    care: "Dry clean only. Store wrapped in silk sheets. Professionally air once a year."
  }
];

const WHY = [
  { icon: Sparkles, t: "Authentic Handloom", d: "Woven on traditional wooden looms." },
  { icon: ShieldCheck, t: "Atelier Quality", d: "Inspected thread by thread." },
  { icon: Globe2, t: "Worldwide Shipping", d: "Delivered securely to 60+ countries." },
  { icon: Truck, t: "Complimentary Delivery", d: "On orders above ₹15,000." },
  { icon: RotateCcw, t: "Easy Returns", d: "7-day boutique return policy." },
  { icon: Headphones, t: "Concierge Support", d: "Personal styling consultations." },
];

const REVIEWS = [
  {
    name: "Ananya Rao",
    city: "Bengaluru",
    text: "My Vastrika Banarasi was the centerpiece of my wedding. The craftsmanship felt heirloom — passed from another century.",
  },
  {
    name: "Meera Iyengar",
    city: "London",
    text: "Every drape feels personal. The gold work is immaculate and the ivory packaging arrives like a love letter.",
  },
  {
    name: "Priya Kapoor",
    city: "Mumbai",
    text: "I have collected sarees for twenty years. Vastrika sits beside the very best — quietly luxurious.",
  },
];

function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [loadProgress, setLoadProgress] = useState(0);
  const [isBoutiqueLoading, setIsBoutiqueLoading] = useState(false);

  // Interactivity States
  const [cart, setCart] = useState<{ product: typeof PRODUCTS[0]; quantity: number; color: string }[]>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("vastrika_cart");
      return saved ? JSON.parse(saved) : [];
    }
    return [];
  });
  
  const [wishlist, setWishlist] = useState<typeof PRODUCTS[0][]>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("vastrika_wishlist");
      return saved ? JSON.parse(saved) : [];
    }
    return [];
  });

  // Drawer / Overlay Open States
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  
  // Modals & Sub-wizards
  const [activeProduct, setActiveProduct] = useState<typeof PRODUCTS[0] | null>(null);
  const [aiQuizOpen, setAiQuizOpen] = useState(false);
  const [aiQuizStep, setAiQuizStep] = useState(1);
  const [aiAnswers, setAiAnswers] = useState({ occasion: "", fabric: "", color: "" });
  const [aiResult, setAiResult] = useState<typeof PRODUCTS[0] | null>(null);

  // Search Query
  const [searchQuery, setSearchQuery] = useState("");
  
  // Shop Filters
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedColor, setSelectedColor] = useState("All");
  const [selectedFabric, setSelectedFabric] = useState("All");
  const [selectedPriceRange, setSelectedPriceRange] = useState(130000);
  const [sortBy, setSortBy] = useState("popular");

  // Checkout State
  const [checkoutStep, setCheckoutStep] = useState<"cart" | "shipping" | "payment" | "success">("cart");
  const [promoCode, setPromoCode] = useState("");
  const [activeDiscount, setActiveDiscount] = useState(0); // in percent
  const [promoError, setPromoError] = useState("");
  const [promoSuccess, setPromoSuccess] = useState("");
  const [giftWrap, setGiftWrap] = useState(false);
  const [giftMessage, setGiftMessage] = useState("");
  
  const [shippingForm, setShippingForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    pincode: ""
  });
  
  const [paymentMethod, setPaymentMethod] = useState("upi");
  const [isProcessingOrder, setIsProcessingOrder] = useState(false);
  const [generatedOrderId, setGeneratedOrderId] = useState("");

  // Guides
  const [activeGuideTab, setActiveGuideTab] = useState<"banarasi" | "kanjivaram" | "organza">("banarasi");

  // Order Tracking
  const [trackingCode, setTrackingCode] = useState("");
  const [trackingStatus, setTrackingStatus] = useState<string | null>(null);

  // Notification Toast State
  const [toast, setToast] = useState<{ show: boolean; msg: string }>({ show: false, msg: "" });

  const triggerToast = (msg: string) => {
    setToast({ show: true, msg });
    setTimeout(() => {
      setToast({ show: false, msg: "" });
    }, 3500);
  };

  useEffect(() => {
    localStorage.setItem("vastrika_cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem("vastrika_wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Preloader timeout (Highly energetic 850ms)
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 850);
    return () => clearTimeout(timer);
  }, []);

  // Trigger top bar loader on filter and sorting changes (Fast 250ms feedback cycle)
  useEffect(() => {
    if (isLoading) return;
    
    setIsBoutiqueLoading(true);
    setLoadProgress(30);
    const t1 = setTimeout(() => setLoadProgress(75), 80);
    const t2 = setTimeout(() => {
      setLoadProgress(100);
      const t3 = setTimeout(() => {
        setIsBoutiqueLoading(false);
        setLoadProgress(0);
      }, 80);
    }, 180);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [selectedCategory, selectedColor, selectedFabric, selectedPriceRange, sortBy, isLoading]);

  const wa = (msg: string) =>
    `https://wa.me/919999999999?text=${encodeURIComponent(msg)}`;

  // Product Enquire link helper
  const getProductWaLink = (product: typeof PRODUCTS[0]) => {
    const text = `Hello VASTRIKA Team,\n\nI am highly interested in the following masterpiece from your collection:\n\n*Product Name:* ${product.name}\n*Price:* ${product.price}\n*Fabric:* ${product.fabric}\n*Color:* ${product.color}\n\nPlease share more details regarding availability, draping options, and shipping timelines.`;
    return wa(text);
  };

  // Cart Handlers
  const handleAddToCart = (product: typeof PRODUCTS[0], quantity = 1, color?: string) => {
    const selectedColor = color || product.color;
    const existingIndex = cart.findIndex(
      (item) => item.product.id === product.id && item.color === selectedColor
    );
    if (existingIndex > -1) {
      const updated = [...cart];
      updated[existingIndex].quantity += quantity;
      setCart(updated);
    } else {
      setCart([...cart, { product, quantity, color: selectedColor }]);
    }
    triggerToast(`Added ${product.name} (${selectedColor}) to your luxury cart.`);
  };

  const handleRemoveFromCart = (productId: string, color: string) => {
    setCart(cart.filter((item) => !(item.product.id === productId && item.color === color)));
    triggerToast("Item removed from your cart.");
  };

  const handleUpdateQuantity = (productId: string, color: string, delta: number) => {
    const updated = cart.map((item) => {
      if (item.product.id === productId && item.color === color) {
        const newQty = item.quantity + delta;
        return { ...item, quantity: Math.max(1, newQty) };
      }
      return item;
    });
    setCart(updated);
  };

  // Wishlist Handlers
  const handleToggleWishlist = (product: typeof PRODUCTS[0]) => {
    const exists = wishlist.some((item) => item.id === product.id);
    if (exists) {
      setWishlist(wishlist.filter((item) => item.id !== product.id));
      triggerToast(`Removed ${product.name} from your wishlist.`);
    } else {
      setWishlist([...wishlist, product]);
      triggerToast(`Saved ${product.name} to your wishlist.`);
    }
  };

  const isProductInWishlist = (productId: string) => {
    return wishlist.some((item) => item.id === productId);
  };

  // Live Filter Logic
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((p) => {
      const matchCategory =
        selectedCategory === "All" ||
        p.category === selectedCategory ||
        (selectedCategory === "Wedding" && p.occasion === "Wedding") ||
        (selectedCategory === "Festive" && p.occasion === "Festive") ||
        (selectedCategory === "New Arrivals" && p.tag === "New");

      const matchColor = selectedColor === "All" || p.color === selectedColor;
      const matchFabric = selectedFabric === "All" || p.fabric === selectedFabric;
      const matchPrice = p.priceVal <= selectedPriceRange;

      return matchCategory && matchColor && matchFabric && matchPrice;
    }).sort((a, b) => {
      if (sortBy === "low-high") return a.priceVal - b.priceVal;
      if (sortBy === "high-low") return b.priceVal - a.priceVal;
      return 0; // Default
    });
  }, [selectedCategory, selectedColor, selectedFabric, selectedPriceRange, sortBy]);

  // Live Search Logic
  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return [];
    return PRODUCTS.filter((p) =>
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.fabric.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.color.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  // Pricing Calculations
  const cartSubtotal = cart.reduce((acc, item) => acc + item.product.priceVal * item.quantity, 0);
  const giftWrapCost = giftWrap ? 250 : 0;
  const discountAmount = Math.round((cartSubtotal * activeDiscount) / 100);
  const cartTotal = cartSubtotal - discountAmount + giftWrapCost;
  const freeShippingThreshold = 15000;
  const remainingForFreeShipping = Math.max(0, freeShippingThreshold - cartSubtotal);

  // Promo Code Validation
  const handleApplyPromo = () => {
    setPromoError("");
    setPromoSuccess("");
    const code = promoCode.trim().toUpperCase();
    if (code === "VASTRIKA10") {
      setActiveDiscount(10);
      setPromoSuccess("VASTRIKA10 applied! 10% discount has been calculated.");
    } else if (code === "WELCOME15") {
      setActiveDiscount(15);
      setPromoSuccess("WELCOME15 applied! 15% discount has been calculated.");
    } else if (code === "") {
      setPromoError("Please enter a valid coupon code.");
    } else {
      setPromoError("Invalid code. Try VASTRIKA10 or WELCOME15.");
    }
  };

  // AI Quiz Process
  const handleAiQuizAnswer = (field: "occasion" | "fabric" | "color", value: string) => {
    const updatedAnswers = { ...aiAnswers, [field]: value };
    setAiAnswers(updatedAnswers);
    
    if (aiQuizStep < 3) {
      setAiQuizStep(aiQuizStep + 1);
    } else {
      // Calculate best match
      let bestMatch = PRODUCTS[0];
      let bestScore = -1;

      PRODUCTS.forEach((p) => {
        let score = 0;
        if (p.occasion.toLowerCase() === updatedAnswers.occasion.toLowerCase()) score += 3;
        if (p.fabric.toLowerCase().includes(updatedAnswers.fabric.toLowerCase())) score += 2;
        if (p.color.toLowerCase().includes(updatedAnswers.color.toLowerCase())) score += 2;
        
        if (score > bestScore) {
          bestScore = score;
          bestMatch = p;
        }
      });

      setAiResult(bestMatch);
      setAiQuizStep(4);
    }
  };

  const resetAiQuiz = () => {
    setAiQuizStep(1);
    setAiAnswers({ occasion: "", fabric: "", color: "" });
    setAiResult(null);
  };

  // Shipping form submission
  const handleShippingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!shippingForm.name || !shippingForm.email || !shippingForm.address || !shippingForm.phone) {
      triggerToast("Please fill in all required shipping fields.");
      return;
    }
    setCheckoutStep("payment");
  };

  // Payment process simulation
  const handleCompleteOrder = () => {
    setIsProcessingOrder(true);
    setTimeout(() => {
      const orderId = `VTK-${Math.floor(100000 + Math.random() * 900000)}`;
      setGeneratedOrderId(orderId);
      setIsProcessingOrder(false);
      setCheckoutStep("success");
      setCart([]); // Clear Cart on success
      triggerToast("Order placed successfully. Welcome to the Vastrika Patronage.");
    }, 2000);
  };

  // Order Tracking Status Check
  const handleCheckTracking = (e: React.FormEvent) => {
    e.preventDefault();
    if (!trackingCode.trim()) {
      setTrackingStatus("Please enter a valid order tracking reference.");
      return;
    }
    const cleanCode = trackingCode.trim().toUpperCase();
    if (cleanCode.startsWith("VTK-")) {
      setTrackingStatus("Handcrafted at Handloom Atelier (Done) · Quality Inspected (In Progress) · Handover to Boutique Logistics expected in 48 hours.");
    } else {
      setTrackingStatus("Order reference not found. Please verify the code (Example: VTK-493201).");
    }
  };

  if (isLoading) {
    return (
      <div className="fixed inset-0 z-[100] bg-background flex flex-col items-center justify-center">
        {/* Loader styles inline for safety */}
        <style dangerouslySetInnerHTML={{__html: `
          @keyframes luxuryPreloader {
            0% { transform: scale(0.97); opacity: 0.8; }
            50% { transform: scale(1.03); opacity: 1; filter: drop-shadow(0 0 12px rgba(200, 165, 74, 0.5)); }
            100% { transform: scale(0.97); opacity: 0.8; }
          }
          @keyframes luxuryPulseRing {
            0% { transform: scale(0.7); opacity: 0.9; border-width: 2px; }
            100% { transform: scale(1.4); opacity: 0; border-width: 1px; }
          }
          .animate-luxury-preloader {
            animation: luxuryPreloader 1s infinite ease-in-out;
          }
          .animate-luxury-ring {
            animation: luxuryPulseRing 0.8s infinite cubic-bezier(0.1, 0.8, 0.1, 1);
          }
        `}} />
        
        {/* Decorative backdrop patterns */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
             style={{ backgroundImage: "radial-gradient(circle at 50% 50%, var(--gold) 1px, transparent 1px)", backgroundSize: "20px 20px" }} />
        
        <div className="text-center space-y-6 max-w-sm px-6 animate-fade-up">
          <div className="relative flex justify-center items-center">
            {/* Pulsing glow ring */}
            <div className="absolute size-24 rounded-full border border-gold/40 animate-luxury-ring" />
            <div className="absolute size-20 rounded-full border border-primary/30 animate-pulse" />
            <span className="font-display text-xs tracking-[0.35em] text-gold uppercase animate-pulse">Atelier</span>
          </div>

          <div className="space-y-2 pt-6">
            <h1 className="font-display text-4xl md:text-5xl tracking-[0.35em] text-primary animate-luxury-preloader">
              VASTRIKA
            </h1>
            <p className="text-[10px] tracking-[0.35em] uppercase text-gold">Timeless Elegance</p>
          </div>

          <div className="pt-4 flex flex-col items-center gap-2">
            <span className="text-[9px] tracking-[0.2em] uppercase text-muted-foreground animate-pulse">Loading Collection...</span>
            <div className="w-36 h-[3px] bg-border rounded-full overflow-hidden relative">
              <div className="absolute top-0 left-0 h-full bg-gold w-1/2 animate-[shimmer_0.8s_infinite]"
                   style={{ backgroundImage: "linear-gradient(90deg, transparent, var(--gold), transparent)" }} />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-x-clip">
      
      {/* Top Luxury Progress Loader */}
      {isBoutiqueLoading && (
        <div
          className="fixed top-0 left-0 h-[3.5px] bg-gradient-to-r from-gold via-primary to-gold z-50 transition-all duration-200 ease-out shadow-[0_0_8px_rgba(200,165,74,0.7)]"
          style={{ width: `${loadProgress}%` }}
        />
      )}

      {/* Toast Notification */}
      <div
        className={`fixed bottom-6 left-6 z-[60] bg-primary text-primary-foreground border border-gold/40 px-6 py-4 rounded-xl shadow-luxe transition-all duration-500 max-w-sm flex items-center gap-3 ${
          toast.show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6 pointer-events-none"
        }`}
      >
        <Sparkles className="size-5 text-gold animate-pulse shrink-0" />
        <p className="text-xs tracking-wider leading-relaxed">{toast.msg}</p>
      </div>

      {/* Announcement bar */}
      <div className="bg-primary text-primary-foreground text-[11px] tracking-[0.3em] uppercase">
        <div className="mx-auto max-w-7xl px-6 py-2.5 flex items-center justify-between gap-4 overflow-hidden">
          <span className="opacity-90 mx-auto text-center">
            Complimentary worldwide boutique shipping on orders above ₹15,000
          </span>
        </div>
      </div>

      {/* Header (Always Solid Sticky Header for Premium legibility) */}
      <header
        className="sticky top-0 z-40 bg-background/90 backdrop-blur-xl border-b border-border/50 transition-all duration-300"
      >
        <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between relative">
          {/* Left Side: Mobile Hamburger & Left Desktop Nav */}
          <div className="flex items-center">
            {/* Hamburger (Mobile) */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="lg:hidden text-foreground/80 hover:text-primary transition-colors mr-4"
              aria-label="Open mobile menu"
            >
              <Menu className="size-5" />
            </button>

            {/* Desktop Left Nav (First 3 items: Shop, Collections, Wedding) */}
            <nav className="hidden lg:flex items-center gap-5 xl:gap-7 text-[11px] xl:text-[12px] tracking-[0.14em] xl:tracking-[0.18em] uppercase text-foreground/75">
              {NAV.slice(0, 3).map((n) => (
                <a
                  key={n}
                  href={`#${n.toLowerCase().replace(" ", "-")}`}
                  className="hover:text-primary transition-colors relative group py-1"
                >
                  {n}
                  <span className="absolute bottom-0 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </nav>
          </div>

          {/* Center Logo: Absolute positioned for mathematically perfect centering and zero overlaps */}
          <a
            href="#"
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-display text-lg sm:text-2xl md:text-3xl tracking-[0.2em] sm:tracking-[0.35em] text-primary"
          >
            VASTRIKA
          </a>

          {/* Right Side: Right Desktop Nav + Icons */}
          <div className="flex items-center gap-4 xl:gap-6 z-10">
            {/* Desktop Right Nav (Last 2 items: About, Contact) */}
            <nav className="hidden lg:flex items-center gap-5 xl:gap-7 text-[11px] xl:text-[12px] tracking-[0.14em] xl:tracking-[0.18em] uppercase text-foreground/75">
              {NAV.slice(3).map((n) => (
                <a
                  key={n}
                  href={`#${n.toLowerCase().replace(" ", "-")}`}
                  className="hover:text-primary transition-colors relative group py-1"
                >
                  {n}
                  <span className="absolute bottom-0 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </nav>
            
            {/* Vertical Divider line */}
            <span className="hidden lg:block h-4 w-px bg-border" />

            {/* Action Icons */}
            <div className="flex items-center gap-3 sm:gap-4 text-foreground/70">
              <button
                onClick={() => setIsSearchOpen(true)}
                className="hover:text-primary transition-colors"
                aria-label="Search Collection"
              >
                <Search className="size-[18px]" />
              </button>
              <button
                onClick={() => triggerToast("Direct account access is restricted. Connect with styling desk for custom credentials.")}
                className="hidden md:inline-flex hover:text-primary transition-colors"
                aria-label="User Account"
              >
                <User className="size-[18px]" />
              </button>
              <button
                onClick={() => setIsWishlistOpen(true)}
                className="hover:text-primary transition-colors relative"
                aria-label="View Wishlist"
              >
                <Heart className="size-[18px]" />
                {wishlist.length > 0 && (
                  <span className="absolute -top-1.5 -right-1.5 size-3.5 grid place-items-center rounded-full bg-gold text-gold-foreground text-[8px] font-bold">
                    {wishlist.length}
                  </span>
                )}
              </button>
              <button
                onClick={() => {
                  setCheckoutStep("cart");
                  setIsCartOpen(true);
                }}
                className="relative hover:text-primary transition-colors"
                aria-label="Shopping Cart"
              >
                <ShoppingBag className="size-[18px]" />
                {cart.length > 0 && (
                  <span className="absolute -top-1.5 -right-1.5 size-3.5 grid place-items-center rounded-full bg-primary text-primary-foreground text-[8px] font-bold">
                    {cart.reduce((s, i) => s + i.quantity, 0)}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer (Left Slide Menu) */}
      <div
        className={`fixed inset-0 z-50 transition-opacity duration-500 bg-black/45 backdrop-blur-sm lg:hidden ${
          isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      >
        <div
          className={`absolute inset-y-0 left-0 w-80 max-w-full bg-background border-r border-border p-8 flex flex-col justify-between transition-transform duration-500 ease-out shadow-luxe ${
            isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div>
            <div className="flex justify-between items-center pb-6 border-b border-border">
              <span className="font-display text-xl tracking-[0.25em] text-primary">VASTRIKA</span>
              <button onClick={() => setIsMobileMenuOpen(false)}>
                <X className="size-5 text-muted-foreground hover:text-foreground" />
              </button>
            </div>
            
            {/* Search Input in Mobile Drawer */}
            <div className="my-6 relative">
              <input
                type="text"
                placeholder="Search sarees, fabrics..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setIsSearchOpen(true);
                  setIsMobileMenuOpen(false);
                }}
                className="w-full rounded-full border border-border bg-card/60 pl-10 pr-4 py-2.5 text-xs text-foreground focus:outline-none focus:border-primary transition"
              />
              <Search className="absolute left-3.5 top-3.5 size-3.5 text-muted-foreground" />
            </div>

            <nav className="flex flex-col gap-5 text-sm tracking-[0.2em] uppercase text-foreground/80 my-8">
              {NAV.map((n) => (
                <a
                  key={n}
                  href={`#${n.toLowerCase().replace(" ", "-")}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="hover:text-primary transition-colors flex items-center justify-between"
                >
                  {n}
                  <ChevronRight className="size-3 text-muted-foreground" />
                </a>
              ))}
            </nav>
          </div>

          <div className="pt-6 border-t border-border space-y-4">
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                setAiQuizOpen(true);
              }}
              className="w-full flex items-center justify-center gap-2 rounded-full border border-gold px-4 py-3 text-xs tracking-wider text-primary bg-gold/10 hover:bg-gold/25 transition"
            >
              <Compass className="size-4" /> AI Style Recommendation
            </button>
            <a
              href={wa("Hello VASTRIKA Team, I'm looking for a consultation.")}
              target="_blank"
              rel="noreferrer"
              className="w-full flex items-center justify-center gap-2 rounded-full bg-primary text-primary-foreground px-4 py-3 text-xs tracking-wider uppercase hover:bg-primary/95 transition"
            >
              <MessageCircle className="size-4" /> Boutique Whatsapp Chat
            </a>
          </div>
        </div>
      </div>

      {/* Cart Drawer (Right Slide Menu) */}
      <div
        className={`fixed inset-0 z-50 transition-opacity duration-500 bg-black/45 backdrop-blur-sm ${
          isCartOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsCartOpen(false)}
      >
        <div
          className={`absolute inset-y-0 right-0 w-full md:w-[480px] bg-background border-l border-border flex flex-col transition-transform duration-500 ease-out shadow-luxe ${
            isCartOpen ? "translate-x-0" : "translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Cart Header */}
          <div className="p-6 border-b border-border flex items-center justify-between bg-card/45">
            <div className="flex items-center gap-3">
              <ShoppingBag className="size-5 text-primary" />
              <h2 className="font-display text-xl text-primary">Your Luxury Bag</h2>
              <span className="text-xs bg-primary/10 text-primary px-2.5 py-0.5 rounded-full font-medium">
                {cart.reduce((s, i) => s + i.quantity, 0)}
              </span>
            </div>
            <button
              onClick={() => setIsCartOpen(false)}
              className="p-1 rounded-full hover:bg-muted transition"
            >
              <X className="size-5 text-muted-foreground hover:text-foreground" />
            </button>
          </div>

          {checkoutStep === "cart" && (
            <>
              {/* Cart Body */}
              <div className="flex-1 overflow-y-auto p-6 space-y-6">
                {cart.length === 0 ? (
                  <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-16">
                    <div className="size-16 rounded-full bg-muted grid place-items-center text-muted-foreground">
                      <ShoppingBag className="size-6" />
                    </div>
                    <div>
                      <p className="font-display text-lg text-primary">Your bag is empty</p>
                      <p className="text-xs text-muted-foreground mt-1 max-w-[240px] mx-auto">
                        Explore our heritage handloom weaves to begin your collection.
                      </p>
                    </div>
                    <button
                      onClick={() => {
                        setIsCartOpen(false);
                        const shopEl = document.getElementById("shop");
                        if (shopEl) shopEl.scrollIntoView({ behavior: "smooth" });
                      }}
                      className="rounded-full bg-primary text-primary-foreground px-6 py-2.5 text-xs tracking-widest uppercase hover:bg-primary/95 transition"
                    >
                      Browse Weaves
                    </button>
                  </div>
                ) : (
                  <>
                    {/* Free Shipping Progress */}
                    <div className="bg-ivory border border-gold/20 p-4 rounded-xl space-y-2">
                      <div className="flex justify-between text-xs tracking-wider">
                        <span className="text-muted-foreground">Free Boutique Shipping progress</span>
                        <span className="font-medium text-primary">
                          {remainingForFreeShipping > 0
                            ? `Add ₹${remainingForFreeShipping.toLocaleString()} for Free Shipping`
                            : "Qualified for Free Worldwide Shipping!"}
                        </span>
                      </div>
                      <div className="h-1.5 w-full bg-border rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gold transition-all duration-500"
                          style={{ width: `${Math.min(100, (cartSubtotal / freeShippingThreshold) * 100)}%` }}
                        />
                      </div>
                    </div>

                    {/* Cart Items List */}
                    <div className="divide-y divide-border">
                      {cart.map((item) => (
                        <div key={`${item.product.id}-${item.color}`} className="py-4 flex gap-4 first:pt-0 last:pb-0">
                          <img
                            src={item.product.img}
                            alt={item.product.name}
                            className="size-20 object-cover rounded-lg border border-border"
                          />
                          <div className="flex-1 space-y-1">
                            <div className="flex justify-between items-start">
                              <h3 className="font-display text-base text-primary leading-tight">
                                {item.product.name}
                              </h3>
                              <p className="text-sm font-medium tracking-wide text-foreground">
                                {item.product.price}
                              </p>
                            </div>
                            <p className="text-[10px] text-muted-foreground uppercase tracking-widest">
                              Fabric: {item.product.fabric} · Color: {item.color}
                            </p>
                            <div className="flex justify-between items-center pt-2">
                              <div className="flex items-center border border-border rounded-full bg-card">
                                <button
                                  onClick={() => handleUpdateQuantity(item.product.id, item.color, -1)}
                                  className="px-2.5 py-1 text-muted-foreground hover:text-foreground transition"
                                >
                                  <Minus className="size-3" />
                                </button>
                                <span className="px-2 text-xs font-semibold">{item.quantity}</span>
                                <button
                                  onClick={() => handleUpdateQuantity(item.product.id, item.color, 1)}
                                  className="px-2.5 py-1 text-muted-foreground hover:text-foreground transition"
                                >
                                  <Plus className="size-3" />
                                </button>
                              </div>
                              <button
                                onClick={() => handleRemoveFromCart(item.product.id, item.color)}
                                className="text-muted-foreground hover:text-destructive transition p-1"
                                aria-label="Remove item"
                              >
                                <Trash2 className="size-4" />
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Gift wrap option */}
                    <div className="border border-border rounded-xl p-4 bg-card/40 space-y-3">
                      <label className="flex items-center gap-3 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={giftWrap}
                          onChange={(e) => setGiftWrap(e.target.checked)}
                          className="rounded text-primary focus:ring-primary size-4 accent-primary"
                        />
                        <div className="flex-1 text-xs">
                          <p className="font-medium text-foreground flex items-center gap-1.5">
                            <Gift className="size-3.5 text-gold" /> Add Luxury Gift Wrapping (+₹250)
                          </p>
                          <p className="text-muted-foreground">Packaged in an elegant solid ivory chest with personalized message card.</p>
                        </div>
                      </label>
                      {giftWrap && (
                        <textarea
                          placeholder="Your greeting message (printed in italic script)..."
                          value={giftMessage}
                          onChange={(e) => setGiftMessage(e.target.value)}
                          maxLength={150}
                          className="w-full bg-background border border-border rounded-lg p-2.5 text-xs focus:outline-none focus:border-primary transition"
                          rows={2}
                        />
                      )}
                    </div>

                    {/* Promo Code Validation UI */}
                    <div className="border-t border-border pt-4">
                      <div className="flex gap-2">
                        <input
                          type="text"
                          placeholder="PROMO CODE (WELCOME15 / VASTRIKA10)"
                          value={promoCode}
                          onChange={(e) => setPromoCode(e.target.value)}
                          className="flex-1 bg-card border border-border rounded-lg px-3 py-2 text-xs uppercase focus:outline-none focus:border-primary transition"
                        />
                        <button
                          onClick={handleApplyPromo}
                          className="bg-primary text-primary-foreground px-4 py-2 rounded-lg text-[10px] tracking-wider uppercase hover:bg-primary/95 transition"
                        >
                          Apply
                        </button>
                      </div>
                      {promoError && <p className="text-destructive text-[10px] mt-1.5 pl-1">{promoError}</p>}
                      {promoSuccess && <p className="text-emerald-brand text-[10px] mt-1.5 pl-1">{promoSuccess}</p>}
                    </div>
                  </>
                )}
              </div>

              {/* Cart Footer */}
              {cart.length > 0 && (
                <div className="p-6 border-t border-border bg-card/65 space-y-4">
                  <div className="space-y-2 text-xs tracking-wider">
                    <div className="flex justify-between text-muted-foreground">
                      <span>Bag Subtotal</span>
                      <span>₹ {cartSubtotal.toLocaleString()}</span>
                    </div>
                    {activeDiscount > 0 && (
                      <div className="flex justify-between text-emerald-brand font-medium">
                        <span>Discount ({activeDiscount}%)</span>
                        <span>- ₹ {discountAmount.toLocaleString()}</span>
                      </div>
                    )}
                    {giftWrap && (
                      <div className="flex justify-between text-muted-foreground">
                        <span>Bespoke Gift Wrapping</span>
                        <span>₹ 250</span>
                      </div>
                    )}
                    <div className="flex justify-between text-muted-foreground">
                      <span>Worldwide Insured Shipping</span>
                      <span className="text-emerald-brand font-medium">COMPLIMENTARY</span>
                    </div>
                    <div className="flex justify-between text-base font-display text-primary pt-2 border-t border-border/60">
                      <span>Total Amount</span>
                      <span>₹ {cartTotal.toLocaleString()}</span>
                    </div>
                  </div>

                  <button
                    onClick={() => setCheckoutStep("shipping")}
                    className="w-full flex items-center justify-center gap-2 rounded-full bg-primary text-primary-foreground py-4 text-xs tracking-[0.25em] uppercase hover:bg-primary/90 transition shadow-luxe"
                  >
                    <Lock className="size-3.5 text-gold" /> Proceed to Checkout
                  </button>
                </div>
              )}
            </>
          )}

          {/* Checkout Steps */}
          {checkoutStep === "shipping" && (
            <div className="flex-1 flex flex-col justify-between p-6">
              <form onSubmit={handleShippingSubmit} className="space-y-5 flex-1 overflow-y-auto">
                <div className="flex gap-2 text-xs text-muted-foreground tracking-widest pb-4 border-b border-border">
                  <span className="font-semibold text-primary">1. SHIPPING</span>
                  <span>&gt;</span>
                  <span>2. PAYMENT</span>
                </div>
                <h3 className="font-display text-lg text-primary">Atelier Delivery Address</h3>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-[10px] tracking-widest text-muted-foreground uppercase mb-1">Patron Full Name *</label>
                    <input
                      type="text"
                      required
                      value={shippingForm.name}
                      onChange={(e) => setShippingForm({ ...shippingForm, name: e.target.value })}
                      className="w-full bg-card border border-border rounded-lg px-3 py-2.5 text-xs focus:outline-none focus:border-primary"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[10px] tracking-widest text-muted-foreground uppercase mb-1">Email *</label>
                      <input
                        type="email"
                        required
                        value={shippingForm.email}
                        onChange={(e) => setShippingForm({ ...shippingForm, email: e.target.value })}
                        className="w-full bg-card border border-border rounded-lg px-3 py-2.5 text-xs focus:outline-none focus:border-primary"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] tracking-widest text-muted-foreground uppercase mb-1">Phone Number *</label>
                      <input
                        type="tel"
                        required
                        value={shippingForm.phone}
                        onChange={(e) => setShippingForm({ ...shippingForm, phone: e.target.value })}
                        className="w-full bg-card border border-border rounded-lg px-3 py-2.5 text-xs focus:outline-none focus:border-primary"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-[10px] tracking-widest text-muted-foreground uppercase mb-1">Mailing Address *</label>
                    <input
                      type="text"
                      required
                      value={shippingForm.address}
                      onChange={(e) => setShippingForm({ ...shippingForm, address: e.target.value })}
                      placeholder="Street address, Suite, Floor"
                      className="w-full bg-card border border-border rounded-lg px-3 py-2.5 text-xs focus:outline-none focus:border-primary"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[10px] tracking-widest text-muted-foreground uppercase mb-1">City *</label>
                      <input
                        type="text"
                        required
                        value={shippingForm.city}
                        onChange={(e) => setShippingForm({ ...shippingForm, city: e.target.value })}
                        className="w-full bg-card border border-border rounded-lg px-3 py-2.5 text-xs focus:outline-none focus:border-primary"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] tracking-widest text-muted-foreground uppercase mb-1">Pincode *</label>
                      <input
                        type="text"
                        required
                        value={shippingForm.pincode}
                        onChange={(e) => setShippingForm({ ...shippingForm, pincode: e.target.value })}
                        className="w-full bg-card border border-border rounded-lg px-3 py-2.5 text-xs focus:outline-none focus:border-primary"
                      />
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-border flex justify-between items-center text-xs">
                  <span className="text-muted-foreground">Order Total:</span>
                  <span className="font-display text-base text-primary">₹ {cartTotal.toLocaleString()}</span>
                </div>
              </form>

              <div className="pt-4 border-t border-border flex gap-3">
                <button
                  onClick={() => setCheckoutStep("cart")}
                  className="flex-1 border border-border rounded-full py-3 text-xs tracking-wider uppercase hover:bg-muted transition"
                >
                  Back to Bag
                </button>
                <button
                  onClick={(e) => handleShippingSubmit(e)}
                  className="flex-1 bg-primary text-primary-foreground rounded-full py-3 text-xs tracking-wider uppercase hover:bg-primary/95 transition"
                >
                  Continue to Pay
                </button>
              </div>
            </div>
          )}

          {checkoutStep === "payment" && (
            <div className="flex-1 flex flex-col justify-between p-6">
              <div className="space-y-5 flex-1 overflow-y-auto">
                <div className="flex gap-2 text-xs text-muted-foreground tracking-widest pb-4 border-b border-border">
                  <span className="text-muted-foreground">1. SHIPPING</span>
                  <span>&gt;</span>
                  <span className="font-semibold text-primary">2. PAYMENT</span>
                </div>
                <h3 className="font-display text-lg text-primary">Boutique Payment Methods</h3>

                <div className="space-y-3">
                  {[
                    { id: "upi", t: "UPI Instant (PhonePe, GPay, Paytm)", d: "Complimentary gift-card voucher with UPI checkout." },
                    { id: "card", t: "Credit or Debit Card", d: "Securely processing Visa, Mastercard, and Amex." },
                    { id: "razor", t: "Razorpay Secure Gateway", d: "Netbanking, wallets, and instant approvals." },
                    { id: "stripe", t: "Stripe International", d: "Highly recommended for patrons outside India." }
                  ].map((m) => (
                    <label
                      key={m.id}
                      className={`block border p-4 rounded-xl cursor-pointer transition ${
                        paymentMethod === m.id
                          ? "border-primary bg-primary/5"
                          : "border-border hover:bg-muted/40"
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <input
                          type="radio"
                          name="payment_select"
                          checked={paymentMethod === m.id}
                          onChange={() => setPaymentMethod(m.id)}
                          className="mt-1 accent-primary"
                        />
                        <div className="text-xs">
                          <p className="font-semibold text-foreground">{m.t}</p>
                          <p className="text-muted-foreground mt-0.5">{m.d}</p>
                        </div>
                      </div>
                    </label>
                  ))}
                </div>

                {paymentMethod === "card" && (
                  <div className="border border-border rounded-xl p-4 bg-muted/40 space-y-3 animate-fade-in">
                    <p className="text-[10px] tracking-widest text-muted-foreground uppercase">Card Information</p>
                    <input
                      type="text"
                      placeholder="Cardholder Name"
                      className="w-full bg-card border border-border rounded-lg px-3 py-2 text-xs"
                    />
                    <div className="grid grid-cols-3 gap-2">
                      <input
                        type="text"
                        placeholder="Card Number"
                        className="col-span-2 w-full bg-card border border-border rounded-lg px-3 py-2 text-xs"
                      />
                      <input
                        type="text"
                        placeholder="Expiry"
                        className="w-full bg-card border border-border rounded-lg px-3 py-2 text-xs"
                      />
                    </div>
                  </div>
                )}

                <div className="pt-4 border-t border-border space-y-2 text-xs">
                  <div className="flex justify-between text-muted-foreground">
                    <span>Shipping to:</span>
                    <span className="font-medium text-foreground">{shippingForm.name}, {shippingForm.city}</span>
                  </div>
                  <div className="flex justify-between text-muted-foreground">
                    <span>Final Amount:</span>
                    <span className="font-display text-base text-primary">₹ {cartTotal.toLocaleString()}</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-border flex gap-3">
                <button
                  onClick={() => setCheckoutStep("shipping")}
                  disabled={isProcessingOrder}
                  className="flex-1 border border-border rounded-full py-3 text-xs tracking-wider uppercase hover:bg-muted transition disabled:opacity-50"
                >
                  Back
                </button>
                <button
                  onClick={handleCompleteOrder}
                  disabled={isProcessingOrder}
                  className="flex-1 bg-primary text-primary-foreground rounded-full py-3 text-xs tracking-wider uppercase hover:bg-primary/95 transition shadow-luxe flex items-center justify-center gap-2 disabled:opacity-75"
                >
                  {isProcessingOrder ? (
                    <>
                      <span className="size-3.5 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin" />
                      Securing Funds...
                    </>
                  ) : (
                    <>
                      <Lock className="size-3 text-gold" /> Pay & Complete
                    </>
                  )}
                </button>
              </div>
            </div>
          )}

          {checkoutStep === "success" && (
            <div className="flex-1 flex flex-col items-center justify-center p-8 text-center space-y-6">
              <div className="size-16 rounded-full bg-gold/10 border border-gold grid place-items-center text-gold">
                <Check className="size-8" />
              </div>
              <div className="space-y-2">
                <h3 className="font-display text-2xl text-primary">Welcome to the Vastrika Patronage</h3>
                <p className="text-xs text-muted-foreground max-w-sm mx-auto">
                  Your order has been registered at our heritage atelier. Our weavers have begun preparing your handloom masterpiece.
                </p>
              </div>

              <div className="border border-border rounded-xl p-5 bg-card/60 w-full text-xs text-left space-y-2">
                <div className="flex justify-between text-muted-foreground">
                  <span>Order Reference</span>
                  <span className="font-mono font-bold text-foreground">{generatedOrderId}</span>
                </div>
                <div className="flex justify-between text-muted-foreground">
                  <span>Delivery Address</span>
                  <span className="text-foreground">{shippingForm.name}, {shippingForm.city}</span>
                </div>
                <div className="flex justify-between text-muted-foreground">
                  <span>Amount Processed</span>
                  <span className="font-semibold text-primary">₹ {cartTotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-muted-foreground">
                  <span>Estimated Arrival</span>
                  <span className="text-emerald-brand font-medium">8 - 14 Business Days</span>
                </div>
              </div>

              <div className="w-full space-y-3">
                <button
                  onClick={() => {
                    setIsCartOpen(false);
                    setCheckoutStep("cart");
                    setTrackingCode(generatedOrderId);
                    const trackEl = document.getElementById("tracking-section");
                    if (trackEl) trackEl.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="w-full bg-primary text-primary-foreground rounded-full py-3.5 text-xs tracking-wider uppercase hover:bg-primary/95 transition shadow-luxe"
                >
                  Track Handcraft Progress
                </button>
                <button
                  onClick={() => {
                    setIsCartOpen(false);
                    setCheckoutStep("cart");
                  }}
                  className="w-full border border-border rounded-full py-3 text-xs tracking-wider uppercase hover:bg-muted transition"
                >
                  Continue Browsing
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Wishlist Drawer (Right Slide Menu) */}
      <div
        className={`fixed inset-0 z-50 transition-opacity duration-500 bg-black/45 backdrop-blur-sm ${
          isWishlistOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsWishlistOpen(false)}
      >
        <div
          className={`absolute inset-y-0 right-0 w-full md:w-[420px] bg-background border-l border-border flex flex-col transition-transform duration-500 ease-out shadow-luxe ${
            isWishlistOpen ? "translate-x-0" : "translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="p-6 border-b border-border flex items-center justify-between bg-card/45">
            <div className="flex items-center gap-3">
              <Heart className="size-5 text-primary" />
              <h2 className="font-display text-xl text-primary">Your Saved Weaves</h2>
              <span className="text-xs bg-primary/10 text-primary px-2.5 py-0.5 rounded-full font-medium">
                {wishlist.length}
              </span>
            </div>
            <button
              onClick={() => setIsWishlistOpen(false)}
              className="p-1 rounded-full hover:bg-muted transition"
            >
              <X className="size-5 text-muted-foreground hover:text-foreground" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {wishlist.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-16">
                <div className="size-16 rounded-full bg-muted grid place-items-center text-muted-foreground">
                  <Heart className="size-6" />
                </div>
                <div>
                  <p className="font-display text-lg text-primary">Your wishlist is empty</p>
                  <p className="text-xs text-muted-foreground mt-1 max-w-[200px] mx-auto">
                    Save your favorite handloom designs to preview them anytime.
                  </p>
                </div>
              </div>
            ) : (
              <div className="divide-y divide-border">
                {wishlist.map((item) => (
                  <div key={item.id} className="py-4 flex gap-4 first:pt-0 last:pb-0">
                    <img
                      src={item.img}
                      alt={item.name}
                      onClick={() => {
                        setActiveProduct(item);
                        setIsWishlistOpen(false);
                      }}
                      className="size-16 object-cover rounded-lg border border-border cursor-pointer hover:opacity-90 transition"
                    />
                    <div className="flex-1 space-y-1">
                      <div className="flex justify-between items-start">
                        <h3
                          onClick={() => {
                            setActiveProduct(item);
                            setIsWishlistOpen(false);
                          }}
                          className="font-display text-sm text-primary leading-tight cursor-pointer hover:underline"
                        >
                          {item.name}
                        </h3>
                        <p className="text-xs font-semibold tracking-wide text-foreground">
                          {item.price}
                        </p>
                      </div>
                      <p className="text-[9px] text-muted-foreground uppercase tracking-widest">
                        {item.fabric} · {item.color}
                      </p>
                      <div className="flex gap-2 pt-2">
                        <button
                          onClick={() => {
                            handleAddToCart(item);
                            setIsWishlistOpen(false);
                            setIsCartOpen(true);
                          }}
                          className="flex-1 rounded-full bg-primary text-primary-foreground text-[10px] tracking-wider uppercase py-1.5 hover:bg-primary/95 transition"
                        >
                          Add to Bag
                        </button>
                        <button
                          onClick={() => handleToggleWishlist(item)}
                          className="border border-border text-muted-foreground hover:text-destructive p-1.5 rounded-full hover:bg-muted transition"
                          aria-label="Remove item"
                        >
                          <Trash2 className="size-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Live Search Overlay */}
      <div
        className={`fixed inset-0 z-50 transition-opacity duration-500 bg-black/55 backdrop-blur-md flex flex-col justify-start items-center ${
          isSearchOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsSearchOpen(false)}
      >
        <div
          className="w-full max-w-3xl bg-background border-b border-border rounded-b-3xl p-6 md:p-8 space-y-6 shadow-luxe animate-fade-in"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center gap-4">
            <Search className="size-5 text-primary shrink-0" />
            <input
              type="text"
              placeholder="Search by weave, fabric, collection, or color (e.g. 'Banarasi', 'Ivory', 'Gold')..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 bg-transparent text-lg md:text-xl text-primary font-display border-none outline-none focus:ring-0 placeholder:text-muted-foreground/60"
              autoFocus
            />
            <button
              onClick={() => {
                setIsSearchOpen(false);
                setSearchQuery("");
              }}
              className="p-1 rounded-full hover:bg-muted transition"
            >
              <X className="size-5 text-muted-foreground" />
            </button>
          </div>

          {/* Quick Suggestion Chips */}
          <div className="space-y-2.5">
            <p className="text-[10px] tracking-widest text-muted-foreground uppercase">Popular Searches</p>
            <div className="flex flex-wrap gap-2">
              {["Banarasi", "Kanjivaram", "Ivory Organza", "Maroon Silk", "Bridal", "Bestseller"].map((tag) => (
                <button
                  key={tag}
                  onClick={() => setSearchQuery(tag)}
                  className="px-3.5 py-1.5 bg-card border border-border text-xs rounded-full hover:border-primary hover:text-primary transition"
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>

          {/* Search results */}
          {searchQuery.trim() && (
            <div className="border-t border-border pt-5 max-h-[300px] overflow-y-auto space-y-4">
              <p className="text-[10px] tracking-widest text-muted-foreground uppercase">
                Products Found ({searchResults.length})
              </p>
              {searchResults.length === 0 ? (
                <p className="text-xs text-muted-foreground py-4">No matching boutique designs found. Try another search.</p>
              ) : (
                <div className="grid sm:grid-cols-2 gap-4">
                  {searchResults.map((item) => (
                    <div
                      key={item.id}
                      onClick={() => {
                        setActiveProduct(item);
                        setIsSearchOpen(false);
                      }}
                      className="flex gap-3 items-center border border-border/60 hover:border-primary p-2.5 rounded-xl bg-card/40 cursor-pointer hover:bg-card transition"
                    >
                      <img src={item.img} alt={item.name} className="size-12 object-cover rounded-lg" />
                      <div className="text-xs">
                        <p className="font-display font-medium text-primary text-sm">{item.name}</p>
                        <p className="text-muted-foreground mt-0.5">{item.fabric} · {item.price}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Product Quick View / Details Modal */}
      <div
        className={`fixed inset-0 z-50 transition-opacity duration-500 bg-black/55 backdrop-blur-sm flex justify-center items-center p-4 overflow-y-auto ${
          activeProduct ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setActiveProduct(null)}
      >
        {activeProduct && (
          <div
            className="w-full max-w-4xl bg-background rounded-3xl border border-border overflow-hidden shadow-luxe flex flex-col md:grid md:grid-cols-12 max-h-[90vh] animate-fade-in"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Gallery */}
            <div className="md:col-span-6 relative bg-card flex flex-col h-[320px] md:h-full overflow-hidden">
              <img
                src={activeProduct.img}
                alt={activeProduct.name}
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <button
                onClick={() => setActiveProduct(null)}
                className="absolute top-4 left-4 size-9 bg-background/80 backdrop-blur-sm text-foreground/80 hover:text-primary rounded-full grid place-items-center md:hidden"
              >
                <X className="size-5" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="md:col-span-6 p-6 md:p-8 flex flex-col justify-between overflow-y-auto max-h-[50vh] md:max-h-[85vh]">
              <div className="space-y-5">
                <div className="flex justify-between items-start gap-4">
                  <div>
                    <span className="text-[10px] tracking-[0.25em] uppercase text-gold/90 font-medium">
                      {activeProduct.category} Atelier
                    </span>
                    <h2 className="font-display text-2xl md:text-3xl text-primary mt-1">
                      {activeProduct.name}
                    </h2>
                    <p className="text-xs text-muted-foreground tracking-wide mt-1">{activeProduct.sub}</p>
                  </div>
                  <button
                    onClick={() => setActiveProduct(null)}
                    className="hidden md:grid size-9 bg-muted hover:bg-muted/80 rounded-full place-items-center transition"
                  >
                    <X className="size-5 text-muted-foreground hover:text-foreground" />
                  </button>
                </div>

                <p className="text-lg font-medium text-foreground tracking-wider">{activeProduct.price}</p>
                
                <p className="text-xs text-muted-foreground leading-relaxed">{activeProduct.desc}</p>

                {/* Specs Specifications list */}
                <div className="border border-border/80 rounded-xl divide-y divide-border text-xs bg-card/40">
                  {Object.entries(activeProduct.specs).map(([key, val]) => (
                    <div key={key} className="flex justify-between p-2.5">
                      <span className="text-muted-foreground">{key}</span>
                      <span className="font-medium text-foreground">{val}</span>
                    </div>
                  ))}
                  <div className="p-2.5">
                    <span className="text-muted-foreground block mb-1">Care Instructions</span>
                    <span className="text-[11px] leading-relaxed text-foreground/80 block">{activeProduct.care}</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-6 border-t border-border mt-6 space-y-3">
                <div className="flex gap-3">
                  <button
                    onClick={() => {
                      handleAddToCart(activeProduct);
                      setActiveProduct(null);
                      setIsCartOpen(true);
                    }}
                    className="flex-1 rounded-full bg-primary text-primary-foreground py-3.5 text-xs tracking-wider uppercase hover:bg-primary/95 transition shadow-luxe"
                  >
                    Add to Bag
                  </button>
                  <button
                    onClick={() => handleToggleWishlist(activeProduct)}
                    className="size-12 rounded-full border border-border hover:border-primary/50 text-foreground/70 hover:text-primary grid place-items-center bg-card transition"
                  >
                    <Heart className={`size-5 ${isProductInWishlist(activeProduct.id) ? "fill-primary text-primary" : ""}`} />
                  </button>
                </div>
                
                <a
                  href={getProductWaLink(activeProduct)}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full flex items-center justify-center gap-2 rounded-full border border-emerald-brand text-emerald-brand bg-emerald-brand/5 hover:bg-emerald-brand hover:text-ivory py-3 text-xs tracking-wider uppercase transition"
                >
                  <MessageCircle className="size-4" /> Enquire on WhatsApp
                </a>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* AI recommendation Wizard Modal */}
      <div
        className={`fixed inset-0 z-50 transition-opacity duration-500 bg-black/55 backdrop-blur-sm flex justify-center items-center p-4 ${
          aiQuizOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setAiQuizOpen(false)}
      >
        <div
          className="w-full max-w-lg bg-background rounded-3xl border border-border p-6 md:p-8 space-y-6 shadow-luxe animate-fade-in relative"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={() => setAiQuizOpen(false)}
            className="absolute top-4 right-4 p-1 rounded-full hover:bg-muted transition"
          >
            <X className="size-5 text-muted-foreground" />
          </button>

          <div className="text-center space-y-2">
            <span className="divider-gold">
              <span className="divider-gold-line" /> AI ATELIER WIZARD
            </span>
            <h3 className="font-display text-2xl text-primary">Discover Your Ideal Saree</h3>
            <p className="text-xs text-muted-foreground">Find a drape customized to your specific lifestyle occasion and color profile.</p>
          </div>

          {aiQuizStep === 1 && (
            <div className="space-y-4 animate-fade-in">
              <p className="text-xs font-semibold tracking-wider text-primary text-center">Step 1: Choose the Occasion</p>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { v: "Wedding", label: "Bridal Wear / Wedding" },
                  { v: "Festive", label: "Festive Celebrations" },
                  { v: "Party Wear", label: "Cocktails & Evening Parties" },
                  { v: "Everyday", label: "Casual Luxury / Office" }
                ].map((o) => (
                  <button
                    key={o.v}
                    onClick={() => handleAiQuizAnswer("occasion", o.v)}
                    className="border border-border p-4 rounded-2xl hover:border-primary hover:bg-primary/5 text-xs text-foreground font-medium transition text-center"
                  >
                    {o.label}
                  </button>
                ))}
              </div>
            </div>
          )}

          {aiQuizStep === 2 && (
            <div className="space-y-4 animate-fade-in">
              <p className="text-xs font-semibold tracking-wider text-primary text-center">Step 2: Fabric & Texture Preference</p>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { v: "Silk", label: "Rich Silk (Heavy)" },
                  { v: "Organza", label: "Sheer Organza (Light)" },
                  { v: "Linen", label: "Textured Linen" }
                ].map((f) => (
                  <button
                    key={f.v}
                    onClick={() => handleAiQuizAnswer("fabric", f.v)}
                    className="border border-border p-4 rounded-2xl hover:border-primary hover:bg-primary/5 text-xs text-foreground font-medium transition text-center"
                  >
                    {f.label}
                  </button>
                ))}
              </div>
            </div>
          )}

          {aiQuizStep === 3 && (
            <div className="space-y-4 animate-fade-in">
              <p className="text-xs font-semibold tracking-wider text-primary text-center">Step 3: Color Palette</p>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { v: "Maroon", label: "Maroon / Crimson" },
                  { v: "Gold", label: "Gold / Ochre" },
                  { v: "Ivory", label: "Ivory / Pastels" },
                  { v: "Emerald", label: "Emerald / Dark Green" }
                ].map((c) => (
                  <button
                    key={c.v}
                    onClick={() => handleAiQuizAnswer("color", c.v)}
                    className="border border-border p-4 rounded-2xl hover:border-primary hover:bg-primary/5 text-xs text-foreground font-medium transition text-center"
                  >
                    {c.label}
                  </button>
                ))}
              </div>
            </div>
          )}

          {aiQuizStep === 4 && aiResult && (
            <div className="space-y-6 text-center animate-fade-in">
              <div className="bg-primary/5 p-4 rounded-2xl border border-primary/20 space-y-4">
                <p className="text-[10px] tracking-widest text-gold font-bold uppercase">Atelier Recommendation</p>
                <img
                  src={aiResult.img}
                  alt={aiResult.name}
                  className="size-36 mx-auto object-cover rounded-xl border border-border"
                />
                <div>
                  <h4 className="font-display text-lg text-primary">{aiResult.name}</h4>
                  <p className="text-xs text-muted-foreground">{aiResult.sub} · {aiResult.price}</p>
                </div>
                <p className="text-[11px] text-muted-foreground italic leading-relaxed px-4">
                  "Based on your profile, this masterwork represents your search. The weave structure matches your occasion and styling preference perfectly."
                </p>
              </div>

              <div className="flex gap-2">
                <button
                  onClick={resetAiQuiz}
                  className="flex-1 border border-border rounded-full py-3 text-xs tracking-wider uppercase hover:bg-muted transition"
                >
                  Start Over
                </button>
                <button
                  onClick={() => {
                    handleAddToCart(aiResult);
                    setAiQuizOpen(false);
                    setIsCartOpen(true);
                  }}
                  className="flex-1 bg-primary text-primary-foreground rounded-full py-3 text-xs tracking-wider uppercase hover:bg-primary/95 transition shadow-luxe"
                >
                  Add to Bag
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Fullscreen Hero */}
      <section className="relative h-[75vh] min-h-[500px] overflow-hidden flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={hero}
            alt="Model in a maroon Banarasi silk saree inside a heritage palace"
            className="w-full h-full object-cover object-center animate-slow-zoom"
          />
          {/* Dark luxury overlay for readability */}
          <div className="absolute inset-0 bg-black/45 md:bg-black/35" />
        </div>

        {/* Hero Content */}
        <div className="relative mx-auto max-w-7xl px-6 w-full z-10 text-ivory">
          <div className="max-w-xl space-y-5 animate-fade-up">
            <span className="divider-gold">
              <span className="divider-gold-line bg-gold" /> The Heritage House
            </span>
            <h1 className="font-display text-[clamp(2.2rem,6vw,4.5rem)] leading-[1.05] text-ivory">
              Timeless<br />
              <span className="italic font-normal text-gold">Elegance,</span><br />
              Woven by Hand.
            </h1>
            <p className="text-xs md:text-sm text-ivory/80 leading-relaxed max-w-md">
              Every thread tells a story of heritage, craftsmanship and quiet
              luxury — sarees shaped on wooden looms across centuries-old
              ateliers of India.
            </p>
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#shop"
                className="group inline-flex items-center gap-3 rounded-full bg-gold text-gold-foreground px-7 py-3.5 text-[11px] tracking-[0.25em] uppercase hover:bg-ivory hover:text-primary transition shadow-luxe"
              >
                Explore Collection
                <ArrowUpRight className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a
                href="#shop"
                className="inline-flex items-center gap-2 px-2 py-3.5 text-[11px] tracking-[0.25em] uppercase border-b border-ivory/45 text-ivory hover:border-gold hover:text-gold transition"
              >
                Shop Now
              </a>
            </div>
            <div className="flex items-center gap-8 pt-4">
              <StatLight n="120+" l="Master Weavers" />
              <span className="h-8 w-px bg-ivory/20" />
              <StatLight n="40 yrs" l="Of Heritage" />
              <span className="h-8 w-px bg-ivory/20" />
              <StatLight n="60+" l="Countries" />
            </div>
          </div>
        </div>
      </section>

      {/* Marquee */}
      <div className="border-y border-border/60 bg-ivory/60 overflow-hidden">
        <div className="flex gap-16 py-5 animate-marquee whitespace-nowrap text-[11px] tracking-[0.4em] uppercase text-foreground/55">
          {Array.from({ length: 2 }).flatMap((_, k) =>
            ["Banarasi", "Kanjivaram", "Organza", "Chanderi", "Bandhani", "Patola", "Tussar", "Linen"].map((w) => (
              <span key={`${k}-${w}`} className="flex items-center gap-16">
                {w}
                <span className="text-gold">✦</span>
              </span>
            )),
          )}
        </div>
      </div>

      {/* Interactive AI recommendation Banner */}
      <section className="bg-primary/5 py-6 border-b border-border/60">
        <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1.5 text-center md:text-left">
            <h3 className="font-display text-xl text-primary flex items-center gap-2 justify-center md:justify-start">
              <Compass className="size-5 text-gold" /> Personal Saree Atelier Advice
            </h3>
            <p className="text-xs text-muted-foreground">Unsure which handloom weave suits you? Take our AI Style recommendation wizard.</p>
          </div>
          <button
            onClick={() => {
              resetAiQuiz();
              setAiQuizOpen(true);
            }}
            className="rounded-full bg-primary text-primary-foreground px-6 py-3 text-xs tracking-wider uppercase hover:bg-primary/95 transition shadow-soft shrink-0"
          >
            Start Recommendations
          </button>
        </div>
      </section>

      {/* Categories */}
      <section id="collections" className="mx-auto max-w-7xl px-6 py-6 md:py-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <span className="divider-gold">
              <span className="divider-gold-line" /> The Atelier
            </span>
            <h2 className="mt-4 font-display text-4xl md:text-5xl text-primary max-w-xl">
              Curated by weave, chosen by heart.
            </h2>
          </div>
          <a
            href="#shop"
            onClick={() => setSelectedCategory("All")}
            className="text-[12px] tracking-[0.25em] uppercase text-primary hover:text-gold transition"
          >
            View all collections →
          </a>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 md:gap-7">
          {CATEGORIES.map((c, i) => (
            <a
              key={c.name}
              href="#shop"
              onClick={() => {
                setSelectedCategory(c.filter);
                const shopEl = document.getElementById("shop");
                if (shopEl) shopEl.scrollIntoView({ behavior: "smooth" });
              }}
              className={`group relative overflow-hidden rounded-2xl bg-card aspect-[4/5] ${
                i % 2 === 1 ? "lg:translate-y-6" : ""
              }`}
            >
              <img
                src={c.img}
                alt={c.name}
                width={800}
                height={1000}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-110"
              />
              {/* Deeper gradient overlay to ensure card text is extremely visible */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5 md:p-6 text-ivory">
                <p className="text-[10px] tracking-[0.35em] uppercase text-gold font-bold drop-shadow-[0_1px_3px_rgba(0,0,0,0.85)]">
                  {c.tag}
                </p>
                <div className="mt-1 flex items-end justify-between">
                  <h3 className="font-display text-2xl md:text-3xl text-ivory drop-shadow-[0_1px_4px_rgba(0,0,0,0.75)]">{c.name}</h3>
                  <ArrowUpRight className="size-5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition text-ivory drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Interactive Shop Section with Sidebar Filters */}
      <section id="shop" className="bg-ivory/70 border-y border-border/60 py-6 md:py-8">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
            <div>
              <span className="divider-gold">
                <span className="divider-gold-line" /> The Boutique Atelier
              </span>
              <h2 className="mt-4 font-display text-4xl md:text-5xl text-primary max-w-xl">
                Browse our collection.
              </h2>
            </div>
            <button
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="lg:hidden flex items-center gap-2 rounded-full border border-border px-5 py-2.5 bg-background text-xs tracking-wider uppercase text-foreground hover:bg-muted"
            >
              Filters {isFilterOpen ? "Close" : "Open"}
            </button>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-start">
            {/* Sidebar filter column (Desktop / toggle on mobile) */}
            <aside className={`lg:col-span-3 space-y-6 lg:block ${isFilterOpen ? "block" : "hidden"}`}>
              <div className="bg-background border border-border rounded-2xl p-5 space-y-6">
                <div className="flex justify-between items-center pb-3 border-b border-border">
                  <h3 className="font-display font-medium text-primary text-base">Filter Sarees</h3>
                  <button
                    onClick={() => {
                      setSelectedCategory("All");
                      setSelectedColor("All");
                      setSelectedFabric("All");
                      setSelectedPriceRange(130000);
                      setSortBy("popular");
                    }}
                    className="text-[10px] tracking-wider uppercase text-muted-foreground hover:text-primary transition"
                  >
                    Reset All
                  </button>
                </div>

                {/* Category selection */}
                <div className="space-y-2">
                  <p className="text-[10px] tracking-widest text-muted-foreground uppercase font-bold">Category</p>
                  <div className="flex flex-col gap-1.5 text-xs">
                    {["All", "Banarasi", "Kanjivaram", "Organza", "Bridal Atelier", "Wedding", "Festive"].map((cat) => (
                      <button
                        key={cat}
                        onClick={() => setSelectedCategory(cat)}
                        className={`text-left py-1 hover:text-primary transition ${
                          selectedCategory === cat ? "text-primary font-semibold pl-2 border-l-2 border-primary" : "text-muted-foreground"
                        }`}
                      >
                        {cat === "Bridal Atelier" ? "Bridal Atelier Edit" : cat}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Fabric Type selection */}
                <div className="space-y-2">
                  <p className="text-[10px] tracking-widest text-muted-foreground uppercase font-bold">Weave Fabric</p>
                  <div className="flex flex-col gap-1.5 text-xs">
                    {["All", "Banarasi Silk", "Kanjivaram Silk", "Organza"].map((fab) => (
                      <button
                        key={fab}
                        onClick={() => setSelectedFabric(fab)}
                        className={`text-left py-1 hover:text-primary transition ${
                          selectedFabric === fab ? "text-primary font-semibold pl-2 border-l-2 border-primary" : "text-muted-foreground"
                        }`}
                      >
                        {fab}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Color selection */}
                <div className="space-y-2">
                  <p className="text-[10px] tracking-widest text-muted-foreground uppercase font-bold">Color Profile</p>
                  <div className="flex flex-wrap gap-2">
                    {["All", "Royal Maroon", "Antique Gold", "Ivory", "Emerald", "Black"].map((col) => (
                      <button
                        key={col}
                        onClick={() => setSelectedColor(col)}
                        className={`px-3 py-1.5 text-[10px] tracking-wide rounded-full border transition ${
                          selectedColor === col
                            ? "bg-primary text-primary-foreground border-primary"
                            : "bg-card text-foreground border-border hover:border-muted-foreground"
                        }`}
                      >
                        {col}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Price Range selection */}
                <div className="space-y-2">
                  <div className="flex justify-between text-[10px] tracking-widest text-muted-foreground uppercase font-bold">
                    <span>Max Price</span>
                    <span className="font-semibold text-primary">₹ {selectedPriceRange.toLocaleString()}</span>
                  </div>
                  <input
                    type="range"
                    min="35000"
                    max="130000"
                    step="5000"
                    value={selectedPriceRange}
                    onChange={(e) => setSelectedPriceRange(Number(e.target.value))}
                    className="w-full h-1.5 bg-border rounded-lg appearance-none cursor-pointer accent-primary"
                  />
                </div>

                {/* Sort Option */}
                <div className="space-y-2">
                  <p className="text-[10px] tracking-widest text-muted-foreground uppercase font-bold">Sort By</p>
                  <div className="relative">
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                      className="w-full bg-card border border-border rounded-lg px-3 py-2 text-xs text-foreground focus:outline-none focus:border-primary appearance-none cursor-pointer"
                    >
                      <option value="popular">Popularity / Heritage</option>
                      <option value="low-high">Price: Low to High</option>
                      <option value="high-low">Price: High to Low</option>
                    </select>
                    <ArrowUpDown className="absolute right-3 top-2.5 size-3.5 text-muted-foreground pointer-events-none" />
                  </div>
                </div>
              </div>
            </aside>

            {/* Product Grid Column */}
            <div className="lg:col-span-9 space-y-6">
              {filteredProducts.length === 0 ? (
                <div className="bg-background border border-border rounded-2xl py-20 px-6 text-center space-y-4">
                  <p className="font-display text-xl text-primary">No designs match your filters</p>
                  <p className="text-xs text-muted-foreground max-w-sm mx-auto">
                    Try adjusting your fabric, color profile, or price filters to see more drapes.
                  </p>
                  <button
                    onClick={() => {
                      setSelectedCategory("All");
                      setSelectedColor("All");
                      setSelectedFabric("All");
                      setSelectedPriceRange(130000);
                      setSortBy("popular");
                    }}
                    className="rounded-full bg-primary text-primary-foreground px-6 py-2 text-xs tracking-wider uppercase hover:bg-primary/95 transition"
                  >
                    Clear All Filters
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredProducts.map((p) => (
                    <article key={p.id} className="group flex flex-col justify-between">
                      <div className="space-y-4">
                        <div className="relative overflow-hidden rounded-2xl bg-card aspect-[4/5] shadow-soft">
                          <img
                            src={p.img}
                            alt={p.name}
                            width={900}
                            height={1100}
                            loading="lazy"
                            onClick={() => setActiveProduct(p)}
                            className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105 cursor-pointer"
                          />
                          {p.tag && (
                            <span className="absolute top-4 left-4 bg-background/85 backdrop-blur-sm text-[10px] tracking-[0.25em] uppercase text-primary px-3 py-1.5 rounded-full font-medium shadow-sm">
                              {p.tag}
                            </span>
                          )}
                          <button
                            onClick={() => handleToggleWishlist(p)}
                            className="absolute top-4 right-4 size-9 grid place-items-center rounded-full bg-background/85 backdrop-blur-sm text-foreground/70 hover:text-primary hover:bg-background transition shadow-sm"
                            aria-label="Add to wishlist"
                          >
                            <Heart className={`size-4 ${isProductInWishlist(p.id) ? "fill-primary text-primary" : ""}`} />
                          </button>
                          
                          {/* Quick view button overlay */}
                          <button
                            onClick={() => setActiveProduct(p)}
                            className="absolute bottom-4 left-4 right-4 bg-background/90 backdrop-blur-sm text-[10px] tracking-[0.2em] uppercase py-2.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-medium text-primary shadow"
                          >
                            Quick View
                          </button>
                        </div>
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <h3
                              onClick={() => setActiveProduct(p)}
                              className="font-display text-xl text-primary leading-tight cursor-pointer hover:underline"
                            >
                              {p.name}
                            </h3>
                            <p className="mt-1 text-[11px] text-muted-foreground tracking-wide uppercase font-medium">
                              {p.sub}
                            </p>
                          </div>
                          <p className="text-sm tracking-wider text-foreground/85 font-semibold whitespace-nowrap">
                            {p.price}
                          </p>
                        </div>
                      </div>

                      <div className="mt-4 flex gap-2">
                        <button
                          onClick={() => handleAddToCart(p, 1)}
                          className="flex-1 rounded-full bg-primary text-primary-foreground text-[10px] tracking-[0.25em] uppercase py-3 hover:bg-primary/90 transition text-center font-medium"
                        >
                          Add to Bag
                        </button>
                        <a
                          href={getProductWaLink(p)}
                          target="_blank"
                          rel="noreferrer"
                          className="size-11 grid place-items-center rounded-full bg-background border border-border text-emerald-brand hover:bg-emerald-brand hover:text-ivory transition"
                          aria-label="Enquire on WhatsApp"
                        >
                          <MessageCircle className="size-4" />
                        </a>
                      </div>
                    </article>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Wedding banner */}
      <section id="wedding" className="relative h-[55vh] min-h-[380px] overflow-hidden">
        <img
          src={weddingBanner}
          alt="Bride in candle-lit haveli wearing a Vastrika bridal saree"
          width={1808}
          height={1104}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
        <div className="relative h-full mx-auto max-w-7xl px-6 flex items-center">
          <div className="max-w-xl text-ivory">
            <span className="divider-gold">
              <span className="divider-gold-line bg-gold" /> The Wedding House
            </span>
            <h2 className="mt-6 font-display text-5xl md:text-6xl leading-[1.05]">
              For the day you've<br /> imagined a thousand times.
            </h2>
            <p className="mt-6 text-ivory/80 max-w-md text-sm md:text-base leading-relaxed">
              A bespoke bridal atelier — one-of-one drapes designed with you,
              draped only by you. Crafted with 24k gold zari threads.
            </p>
            <a
              href="#shop"
              onClick={() => setSelectedCategory("Bridal Atelier")}
              className="mt-10 inline-flex items-center gap-3 rounded-full bg-ivory text-primary px-7 py-4 text-[12px] tracking-[0.25em] uppercase hover:bg-gold hover:text-gold-foreground transition font-medium shadow-luxe"
            >
              Discover Bridal <ArrowUpRight className="size-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Interactive Fabric & Craft Guides */}
      <section id="our-craft" className="mx-auto max-w-7xl px-6 py-6 md:py-8">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 relative">
            <div className="overflow-hidden rounded-2xl shadow-soft">
              <img
                src={heritage}
                alt="Master artisan weaving on a traditional handloom"
                width={1408}
                height={1008}
                loading="lazy"
                className="w-full h-auto"
              />
            </div>
            <div className="hidden md:block absolute -bottom-8 -right-6 bg-background rounded-2xl border border-border p-6 max-w-[240px] shadow-luxe">
              <p className="font-display text-4xl text-primary">120<span className="text-gold">+</span></p>
              <p className="mt-1 text-[11px] tracking-[0.3em] uppercase text-muted-foreground">
                Master Weavers
              </p>
            </div>
          </div>
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="divider-gold">
                <span className="divider-gold-line" /> Our Craft
              </span>
              <h2 className="mt-5 font-display text-4xl md:text-5xl text-primary leading-[1.05]">
                A century of looms, a lifetime of devotion.
              </h2>
            </div>
            
            {/* Guide Tabs */}
            <div className="border-b border-border flex gap-4 text-xs tracking-wider uppercase font-medium">
              {[
                { id: "banarasi", l: "Banarasi" },
                { id: "kanjivaram", l: "Kanjivaram" },
                { id: "organza", l: "Organza" }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveGuideTab(tab.id as any)}
                  className={`pb-2.5 transition ${
                    activeGuideTab === tab.id ? "text-primary border-b-2 border-primary font-bold" : "text-muted-foreground hover:text-primary"
                  }`}
                >
                  {tab.l}
                </button>
              ))}
            </div>

            <div className="space-y-4 text-xs leading-relaxed text-muted-foreground min-h-[140px] animate-fade-in">
              {activeGuideTab === "banarasi" && (
                <>
                  <p className="font-display text-base text-primary font-semibold">The Royal Kadhwa Handloom Style</p>
                  <p>
                    Banarasi weaving incorporates handloom silk with gold and silver zari metallic embroidery. Our Kadhwa method ensures each motif is woven individually without loose threads on the back side.
                  </p>
                  <p><strong>Timeline:</strong> Woven entirely by hand over 4 to 8 weeks depending on layout complexity.</p>
                </>
              )}
              {activeGuideTab === "kanjivaram" && (
                <>
                  <p className="font-display text-base text-primary font-semibold">The Ancient Korvai Weaving Technique</p>
                  <p>
                    Kanjivaram sarees are formed using pure mulberry silk yarn. The signature temple border (Korvai) is woven separately and interlocking joined with the main body warp using strong triple-ply silk threads.
                  </p>
                  <p><strong>Timeline:</strong> Handcrafted by two master weavers simultaneously over 3 to 6 weeks.</p>
                </>
              )}
              {activeGuideTab === "organza" && (
                <>
                  <p className="font-display text-base text-primary font-semibold">Whisper Light Hand Embroidery</p>
                  <p>
                    Formed from sheer silk organza bases, these sarees are hand-adorned with zardozi, zard, pearls, and glass beads. The technique demands immense precision to prevent damage to the delicate weave.
                  </p>
                  <p><strong>Timeline:</strong> Meticulously embroidered by hand stitch-by-stitch over 2 to 4 weeks.</p>
                </>
              )}
            </div>

            <a
              href="#shop"
              onClick={() => setSelectedCategory("All")}
              className="inline-flex items-center gap-2 text-[12px] tracking-[0.25em] uppercase text-primary border-b border-primary/30 pb-1 hover:text-gold hover:border-gold transition font-medium"
            >
              Explore Handloom Designs <ArrowUpRight className="size-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Why Vastrika */}
      <section id="about" className="bg-ivory/70 border-y border-border/60 py-6 md:py-8">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="divider-gold">
              <span className="divider-gold-line" /> The Vastrika Promise
            </span>
            <h2 className="mt-4 font-display text-4xl md:text-5xl text-primary">
              Quiet luxury, in every detail.
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-y-12 gap-x-6">
            {WHY.map(({ icon: Icon, t, d }) => (
              <div key={t} className="text-center group">
                <div className="mx-auto size-14 rounded-full grid place-items-center bg-background border border-border text-primary group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition">
                  <Icon className="size-5" />
                </div>
                <p className="mt-4 font-display text-base text-primary">{t}</p>
                <p className="mt-1 text-xs text-muted-foreground leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section id="journal" className="mx-auto max-w-7xl px-6 py-6 md:py-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="divider-gold">
            <span className="divider-gold-line" /> The House Whispers
          </span>
          <h2 className="mt-4 font-display text-4xl md:text-5xl text-primary">
            Heirlooms, in the words of our patrons.
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-7">
          {REVIEWS.map((r) => (
            <figure
              key={r.name}
              className="rounded-2xl border border-border bg-card p-8 shadow-soft hover:shadow-luxe transition"
            >
              <div className="flex gap-0.5 text-gold">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-3.5 fill-current" />
                ))}
              </div>
              <blockquote className="mt-5 font-display text-xl leading-relaxed text-foreground/85 italic">
                "{r.text}"
              </blockquote>
              <figcaption className="mt-6 pt-5 border-t border-border">
                <p className="font-display text-base text-primary">{r.name}</p>
                <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mt-0.5">
                  {r.city}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* Instagram */}
      <section className="mx-auto max-w-7xl px-6 pb-6 md:pb-8">
        <div className="flex items-end justify-between mb-8">
          <div>
            <span className="divider-gold">
              <span className="divider-gold-line" /> @vastrika
            </span>
            <h2 className="mt-3 font-display text-3xl md:text-4xl text-primary">
              From the world of Vastrika.
            </h2>
          </div>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="hidden md:inline-flex text-[12px] tracking-[0.25em] uppercase text-primary hover:text-gold transition"
          >
            Follow on Instagram →
          </a>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {[hero, p1, catKanjivaram, p2, catOrganza, weddingBanner].map((src, i) => (
            <a
              key={i}
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="group relative aspect-square overflow-hidden rounded-xl"
            >
              <img src={src} alt="" loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/45 transition grid place-items-center">
                <Instagram className="size-5 text-ivory opacity-0 group-hover:opacity-100 transition" />
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Order Tracking Section */}
      <section id="tracking-section" className="bg-card border-y border-border/60 py-6 md:py-8">
        <div className="mx-auto max-w-xl px-6 space-y-6">
          <div className="text-center space-y-2">
            <span className="divider-gold">
              <span className="divider-gold-line" /> Patron Desk
            </span>
            <h3 className="font-display text-2xl text-primary">Track Order Progress</h3>
            <p className="text-xs text-muted-foreground">Monitor the handloom and dispatch timeline of your purchase.</p>
          </div>
          <form onSubmit={handleCheckTracking} className="flex gap-2">
            <input
              type="text"
              required
              placeholder="Enter your Order Reference (e.g. VTK-982430)"
              value={trackingCode}
              onChange={(e) => setTrackingCode(e.target.value)}
              className="flex-1 bg-background border border-border rounded-full px-5 py-3 text-xs focus:outline-none focus:border-primary uppercase"
            />
            <button
              type="submit"
              className="rounded-full bg-primary text-primary-foreground px-6 py-3 text-xs tracking-wider uppercase hover:bg-primary/95 transition shadow-soft"
            >
              Track
            </button>
          </form>
          {trackingStatus && (
            <div className="bg-background border border-gold/30 rounded-2xl p-5 text-xs text-center leading-relaxed text-foreground/80 animate-fade-in">
              <p className="font-medium text-primary mb-1">Status Report</p>
              <p>{trackingStatus}</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 py-6 md:py-8">
          <div className="relative rounded-3xl overflow-hidden border border-gold/30 bg-gradient-to-br from-primary to-[oklch(0.30_0.11_16)] text-ivory px-8 md:px-16 py-8 md:py-10 text-center">
            <div className="absolute inset-0 opacity-[0.07] pointer-events-none"
                 style={{ backgroundImage: "radial-gradient(circle at 20% 20%, var(--gold) 1px, transparent 1px), radial-gradient(circle at 80% 60%, var(--gold) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
            <span className="divider-gold relative">
              <span className="divider-gold-line bg-gold" /> The House Letter
            </span>
            <h2 className="relative mt-5 font-display text-4xl md:text-5xl max-w-2xl mx-auto">
              Receive private previews, before the world does.
            </h2>
            <p className="relative mt-5 text-ivory/75 max-w-md mx-auto text-sm leading-relaxed">
              Quiet stories from the loom, first looks at new collections, and
              invitations to our private previews.
            </p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                triggerToast("Thank you for joining our private newsletter circle.");
              }}
              className="relative mt-10 flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            >
              <input
                type="email"
                required
                placeholder="Your email address"
                className="flex-1 rounded-full bg-ivory/10 border border-ivory/25 px-5 py-3.5 text-sm text-ivory placeholder:text-ivory/55 backdrop-blur focus:outline-none focus:border-gold transition"
              />
              <button className="rounded-full bg-gold text-gold-foreground px-7 py-3.5 text-[11px] tracking-[0.3em] uppercase hover:bg-ivory hover:text-primary transition font-semibold">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-[oklch(0.22_0.012_30)] text-ivory/80">
        <div className="mx-auto max-w-7xl px-6 py-10 grid lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2 space-y-4">
            <p className="font-display text-3xl tracking-[0.35em] text-ivory">VASTRIKA</p>
            <p className="text-[11px] tracking-[0.4em] uppercase text-gold mt-1">
              Timeless Elegance
            </p>
            <p className="text-sm text-ivory/65 leading-relaxed max-w-sm">
              A heritage house of handwoven sarees, crafted across the ateliers of
              India for the modern woman who collects beauty.
            </p>
            <div className="pt-2 flex gap-3">
              {[Instagram, Facebook, Youtube].map((I, i) => (
                <a
                  key={i}
                  href="#"
                  className="size-10 grid place-items-center rounded-full border border-ivory/15 hover:border-gold hover:text-gold transition"
                >
                  <I className="size-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Section: side by side in a 2-column or 3-column layout on mobile */}
          <div className="lg:col-span-3 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {[
              { h: "Atelier", l: ["Shop All", "New Arrivals", "Bestsellers", "Wedding", "Festive"] },
              { h: "House", l: ["Our Craft", "About", "Journal", "Press", "Stores"] },
              { h: "Care", l: ["Contact", "Shipping", "Returns", "Saree Care", "FAQ"] },
            ].map((col) => (
              <div key={col.h} className="space-y-4">
                <p className="text-[11px] tracking-[0.35em] uppercase text-gold">{col.h}</p>
                <ul className="space-y-3 text-sm">
                  {col.l.map((i) => (
                    <li key={i}>
                      <a
                        href="#shop"
                        onClick={() => {
                          if (i === "New Arrivals") setSelectedCategory("New Arrivals");
                          else if (i === "Bestsellers") setSelectedCategory("Bestsellers");
                          else if (i === "Wedding") setSelectedCategory("Wedding");
                          else if (i === "Festive") setSelectedCategory("Festive");
                          else setSelectedCategory("All");
                          const shopEl = document.getElementById("shop");
                          if (shopEl) shopEl.scrollIntoView({ behavior: "smooth" });
                        }}
                        className="hover:text-ivory transition"
                      >
                        {i}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        
        {/* Contact details explicitly */}
        <div className="border-t border-ivory/10 mx-auto max-w-7xl px-6 py-8 grid md:grid-cols-3 gap-6 text-xs text-ivory/60">
          <div>
            <p className="font-semibold text-ivory">Mumbai Atelier</p>
            <p className="mt-1">Lands End, Bandra West, Mumbai, India</p>
          </div>
          <div>
            <p className="font-semibold text-ivory">Patron Support</p>
            <p className="mt-1">support@vastrika-luxury.com · +91 99999 99999</p>
          </div>
          <div>
            <p className="font-semibold text-ivory">Business Hours</p>
            <p className="mt-1">Monday - Sunday: 11:00 AM - 8:00 PM IST</p>
          </div>
        </div>

        <div className="border-t border-ivory/10 bg-black/10">
          <div className="mx-auto max-w-7xl px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-[11px] tracking-[0.25em] uppercase text-ivory/50">
            <p>© {new Date().getFullYear()} Vastrika Heritage House</p>
            <p>Handcrafted in India · Worn around the world</p>
          </div>
        </div>
      </footer>

      {/* WhatsApp floating chat */}
      <a
        href={wa("Hello VASTRIKA Team, I'm interested in your sarees. Please share more details.")}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-[45] group"
      >
        <span className="absolute inset-0 rounded-full bg-emerald-brand/30 animate-ping" />
        <span className="relative grid place-items-center size-14 rounded-full bg-emerald-brand text-ivory shadow-luxe hover:scale-105 transition">
          <MessageCircle className="size-6" />
        </span>
      </a>
    </div>
  );
}

function Stat({ n, l }: { n: string; l: string }) {
  return (
    <div>
      <p className="font-display text-2xl text-primary">{n}</p>
      <p className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground mt-1">
        {l}
      </p>
    </div>
  );
}

function StatLight({ n, l }: { n: string; l: string }) {
  return (
    <div>
      <p className="font-display text-xl text-gold">{n}</p>
      <p className="text-[9px] tracking-[0.25em] uppercase text-ivory/70 mt-1">
        {l}
      </p>
    </div>
  );
}

