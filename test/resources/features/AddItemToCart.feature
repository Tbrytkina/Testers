Feature: User adds item into cart

    @English
    Scenario: User adds one item to cart 
        Given User is on Catalog page
        When User clicks on first visible product item
        And User clicks button Lisage Ostukorvi
        #Then item should be added to the cart
        Then item should be in the cart
        #Then item in the cart

        