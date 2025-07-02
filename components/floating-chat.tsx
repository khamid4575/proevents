"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { MessageCircle, X } from "lucide-react"

export function FloatingChat() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {!isOpen ? (
        <Button
          onClick={() => setIsOpen(true)}
          className="w-14 h-14 rounded-full bg-brand-primary hover:bg-brand-secondary text-white shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      ) : (
        <div className="bg-white rounded-lg shadow-xl border p-4 w-80">
          <div className="flex justify-between items-center mb-3">
            <h4 className="font-semibold text-gray-900">Chat with us!</h4>
            <Button variant="ghost" size="sm" onClick={() => setIsOpen(false)}>
              <X className="h-4 w-4" />
            </Button>
          </div>
          <p className="text-sm text-gray-600 mb-4">Hi! How can we help you plan your perfect event?</p>
          <div className="space-y-2">
            <Button
              variant="outline"
              size="sm"
              className="w-full justify-start bg-white text-gray-700 hover:bg-brand-primary/5 hover:text-brand-primary border-gray-300"
            >
              Телефон: +998 90 805 82 84
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="w-full justify-start bg-white text-gray-700 hover:bg-brand-primary/5 hover:text-brand-primary border-gray-300"
            >
              Телефон: +998 90 175 92 52
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}
