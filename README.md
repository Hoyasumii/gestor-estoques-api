product
- id
- name
- description
- category_id
- brand_id
- cost_price
- markup_percentage
- created_at
- updated_at

category
- id
- name
- category_from@category->id

brand
- id
- name
- logo

stock
- id
- product_id
- amount

stock_exits
- product_id
- amount
- exit_at
- cost_price
- markup_percentage
