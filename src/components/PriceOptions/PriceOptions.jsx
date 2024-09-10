import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {
    const priceOptions = [
        {
          "id": 1,
          "name": "Basic Plan",
          "details": "This plan offers essential features for personal use.",
          "features": [
            "1 GB Storage",
            "Single User",
            "Basic Support"
          ],
          "price": 5.99
        },
        {
          "id": 2,
          "name": "Standard Plan",
          "details": "Suitable for small businesses with moderate needs.",
          "features": [
            "10 GB Storage",
            "Up to 5 Users",
            "Priority Support",
            "Access to Community Forum",
            "Monthly Backups",
            "Limited API Access"
          ],
          "price": 19.99
        },
        {
          "id": 3,
          "name": "Premium Plan",
          "details": "Best for large teams and businesses with advanced requirements.",
          "features": [
            "100 GB Storage",
            "Unlimited Users",
            "24/7 Support",
            "Full API Access",
            "Advanced Analytics",
            "Custom Integrations",
            "White-Labeling Options"
          ],
          "price": 49.99
        }
      ]
      

    return (
        <div className="m-12">
            <h2 className="text-5xl">Best price for your suit</h2>
            <div className="grid md:grid-cols-3 gap-6">
                {
                    priceOptions.map(option => <PriceOption
                        key={option.id}
                        option={option}
                    ></PriceOption>)
                }
            </div>
        </div>
    );
};

export default PriceOptions;