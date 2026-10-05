import React from 'react';
import Container from '../components/common/Container';
import SectionHeading from '../components/common/SectionHeading';
import Button from '../components/common/Button';
import { Home } from 'lucide-react';

export default function NotFoundPage() {
  return (
    <div className="py-20 sm:py-32">
      <Container>
        <div className="max-w-md mx-auto text-center space-y-6">
          <SectionHeading
            kicker="404"
            title="Page Not Found"
            subtitle="The page you are looking for does not exist or has been moved."
            align="center"
          />
          <div>
            <Button to="/" variant="primary" size="md" icon={Home}>
              Return Home
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
