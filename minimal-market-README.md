# Minimal Market — Project README

**Role:** Web Developer / E-commerce Specialist — Pre-hiring Assignment
**Platform:** WordPress + WooCommerce
**Submitted by:** Akash More

## Overview

A prototype WooCommerce store demonstrating WordPress site setup, WooCommerce configuration, a mixed physical/digital product catalog, working checkout logic, and basic theme customization via CSS and a code snippet.

## Environment

- **Local development:** LocalWP (bundled PHP/MySQL/web server)
- **CMS:** WordPress
- **E-commerce engine:** WooCommerce
- **Theme:** Storefront — chosen because it's WooCommerce's own official theme, so cart, checkout, and shop widget areas work correctly out of the box with no extra configuration.

## Plugins Installed

| Plugin | Purpose |
|---|---|
| **WooCommerce** | Core e-commerce functionality — products, cart, checkout, shipping, payments |
| **Code Snippets** | Used to safely add a PHP filter (hiding the product SKU) without editing the theme's `functions.php` directly — keeps the change intact even if the theme gets updated |

## Store Configuration

- **Currency:** USD ($)
- **Product categories:** Apparel, Digital Accessories

**Products (4):**

| Product | Type | Price | Notes |
|---|---|---|---|
| Classic Cotton T-Shirt | Simple physical | $25.00 | Stock: 15 |
| Running Shoes | Variable | $50.00 – $60.00 | Size (S/M/L) × Color (Red/Blue) = 6 variations, individually priced and stocked |
| E-commerce Starter Guide PDF | Downloadable/virtual | $10.00 | Virtual + Downloadable enabled, PDF file attached |
| Wireless Earbuds | Simple, on-sale | ~~$100.00~~ $80.00 | Regular/sale price pair |

**Shipping:** One zone ("Local Zone," region: Everywhere) with two methods:
- Flat rate — $5.00
- Free shipping — auto-applies once cart total reaches $50.00

**Payment gateway:** Cash on Delivery, enabled — lets test orders be placed end-to-end with no real charges or API keys required.

## Layout & Navigation

- **Homepage:** Custom page with a Cover/hero banner ("Welcome to Minimal Market" + Shop Now button) followed by a Featured Products grid (WooCommerce Products block), set as the site's static front page.
- **Navigation menu:** Home, Shop, Cart, Checkout, My account.
- **Shop page sidebar:** Filter by Price (range slider) and Filter by Category widgets.

## Custom Design Tweaks

Added via **Appearance → Customize → Additional CSS**:

/* Brand color on classic-theme Add to Cart buttons */
.woocommerce a.button,
.woocommerce button.button,
.woocommerce input.button,
.woocommerce #respond input#submit,
.woocommerce a.added_to_cart,
.single_add_to_cart_button {
    background-color: #2A70E8 !important;
    border-color: #2A70E8 !important;
    color: #ffffff !important;
}

.woocommerce a.button:hover,
.woocommerce button.button:hover,
.woocommerce input.button:hover,
.single_add_to_cart_button:hover {
    background-color: #1d56b8 !important;
    border-color: #1d56b8 !important;
}

/* Brand color on block-based Add to Cart buttons (homepage Products block) */
.wc-block-components-product-button__button {
    background-color: #2A70E8 !important;
    border-color: #2A70E8 !important;
    color: #ffffff !important;
}

.wc-block-components-product-button__button:hover {
    background-color: #1d56b8 !important;
    border-color: #1d56b8 !important;
}

/* Hide SKU text on single product pages (CSS-level fallback) */
.woocommerce div.product p.sku_wrapper {
    display: none !important;
}

**SKU removal**, in addition to the CSS rule, was also handled at the functional level via a Code Snippets entry, which is the more correct fix since it stops the SKU from being rendered at all rather than just hiding it visually:

```php
add_filter( 'wc_product_sku_enabled', '__return_false' );
```

## Challenges Faced

1. **Duplicate shipping zone** — WooCommerce's onboarding wizard auto-created an extra "India" shipping zone containing only Free Shipping. Since WooCommerce matches a customer to a single zone (most specific first), this would have silently overridden the intended $5 flat-rate option for local customers. Fixed by deleting the redundant zone and keeping one "Local Zone" (Everywhere) with both Flat rate and Free shipping.
2. **Button color coverage gap** — the initial CSS only recolored buttons rendered by the classic WooCommerce templates. The homepage's "Products" block renders its own Add to Cart button with a different class name (`.wc-block-components-product-button__button`), so it needed a second, separate CSS rule to pick up the brand color.
3. **Site visibility** — WooCommerce stores default to "Coming soon" mode until manually switched to public; needed to disable this before the store was viewable/shareable.

## Deliverable

- [ ] Live Link: industrious-souvenir.localsite.io, Username: popcorn, Password: standing

Note: This site is hosted via a local tunnel (LocalWP's Live Link), so my machine needs to be on and Local running for the link to work. Please let me know before you plan to test it, and I'll make sure it's up.