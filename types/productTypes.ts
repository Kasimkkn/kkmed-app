export interface Medicine {
  id: string;
  main_category: string;
  medcine_name: string;
  medcine_image: string;
  brand_name: string;
  strip_quantity: string;
  old_price: string;
  new_price: string;
  offer: string;
  description_title: string;
  description_content: string;
  product_summary: { offer_price: string }[];
  medicine_uses: { title: string; description: string }[];
  medicine_side_effects: {
    title: string;
    description: string;
    main_effects: string[];
  }[];
  directions_of_use: string;
  frequently_asked_questions: {
    id: string;
    question: string;
    answer: string;
  }[];
}
