import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";

export default function LandingPage() {
  return (
    <div className="bg-[#F9F9F9] text-[#333] min-h-screen">
      <header className="bg-[#6BAF92] text-white px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">Sayur Lokal</h1>
        <nav className="flex space-x-6">
          <a href="#" className="hover:underline">Popular</a>
          <a href="#" className="hover:underline">Shop</a>
          <a href="#" className="hover:underline">Contact</a>
          <a href="#" className="hover:underline">Blog</a>
        </nav>
        <div className="flex items-center space-x-4">
          <Input placeholder="Search for meal preps..." className="w-64" />
          <Button className="bg-[#F39C4F] text-white">Search</Button>
        </div>
      </header>

      <main className="p-8">
        <section className="bg-white rounded-xl shadow-md p-8 flex justify-between items-center">
          <div>
            <p className="text-[#6BAF92] font-semibold text-lg">30% OFF</p>
            <h2 className="text-3xl font-bold mb-2">Family Meal Prep Bundles</h2>
            <p className="mb-4 max-w-md text-[#666]">
              Healthy, fresh, and locally sourced meal prep kits designed to save you time while supporting your local farmers.
            </p>
            <Button className="bg-[#F39C4F] hover:bg-orange-500 text-white px-6 py-2 rounded-lg">Order Now</Button>
          </div>
          <img
            src="/images/veggie-bundle.png"
            alt="Veggie Bundle"
            className="w-1/3 rounded-xl"
          />
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          <Card>
            <CardContent className="p-4">
              <h3 className="font-semibold text-lg mb-2">Eco Packaging</h3>
              <p className="text-sm text-[#666]">
                All our meals come in compostable and recyclable packaging. Say goodbye to plastic waste.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <h3 className="font-semibold text-lg mb-2">Locally Sourced</h3>
              <p className="text-sm text-[#666]">
                Ingredients come straight from trusted local farms, ensuring freshness and supporting the community.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <h3 className="font-semibold text-lg mb-2">Private Delivery</h3>
              <p className="text-sm text-[#666]">
                Our eco-friendly delivery service ensures your meals arrive quickly and sustainably.
              </p>
            </CardContent>
          </Card>
        </section>

        <section className="mt-12 text-center">
          <h4 className="text-xl font-bold text-[#6BAF92] mb-2">Join our Green Movement</h4>
          <p className="text-sm text-[#555] max-w-xl mx-auto">
            Order from Sayur Lokal and be part of a growing community that values sustainability, health, and local support. Together, we can make a difference—one meal at a time.
          </p>
        </section>
      </main>

      <footer className="mt-12 bg-[#A8C686] text-white p-6 text-center">
        <p>&copy; 2025 Sayur Lokal. All rights reserved.</p>
      </footer>
    </div>
  );
}
