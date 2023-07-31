import { Link } from "react-router-dom";

const Terms = () => {
    return (
        <div>
            <h3>Our Terms and Conditions</h3>
            <p>
                Welcome to DragonNews. By accessing and using this website, you accept and agree to be bound by the following terms and conditions. If you do not agree to these terms, please do not use the website.
            </p>

            <h4>Content and Intellectual Property</h4>
            <p>
                The content on this website, including articles, images, videos, and other materials, is protected by copyright and other intellectual property laws. You may not reproduce, modify, distribute, or use the content without explicit permission from DragonNews.
            </p>

            <h4>Accuracy and Reliability</h4>
            <p>
                We strive to provide accurate and reliable information on our website. However, DragonNews does not guarantee the completeness, accuracy, or timeliness of the content. The information provided is for general informational purposes only and should not be considered as professional advice.
            </p>

            <h4>User Conduct</h4>
            <p>
                When using our website, you agree not to engage in any activities that may harm the website or its users. This includes but is not limited to unauthorized access, posting harmful content, or engaging in any illegal activities.
            </p>

            <h4>User Comments and Contributions</h4>
            <p>
                Users may post comments or contribute content on our website. DragonNews reserves the right to moderate, remove, or edit user-generated content that violates our guidelines or terms.
            </p>

            <h4>Third-Party Links</h4>
            <p>
                Our website may contain links to third-party websites for your convenience. DragonNews is not responsible for the content or practices of these third-party websites. Visiting these links is at your own risk.
            </p>

            <h4>Privacy Policy</h4>
            <p>
                Please review our Privacy Policy, which explains how we collect, use, and protect your personal information.
            </p>

            <h4>Changes to Terms and Conditions</h4>
            <p>
                DragonNews reserves the right to update or modify these terms and conditions at any time without prior notice. It is your responsibility to review these terms regularly for any changes.
            </p>

            <h4>Contact Information</h4>
            <p>
                If you have any questions or concerns about our terms and conditions, please contact us at DragonNew@gmail.com
            </p>

            <p>
                Last Updated: [31st July 2023]
            </p>
            <p>Go Back to <Link to="/register">Register</Link></p>
        </div>
    );
};

export default Terms;
