'use client';

import { useSearchParams } from "next/navigation";
import {
  AirTravelRights,
  ConsumerProtection,
  ConsumerRights,
  CybercrimeScams,
  EntrepreneurialComplaints
} from "../individualBlog";
import { BlogThemes, ComponentMappings } from "../models/blog.model";

const componentMappings: ComponentMappings = {
  'consumer-rights': <ConsumerRights />,
  'entrepreneurial-complaints': <EntrepreneurialComplaints />,
  'air-travel-rights': <AirTravelRights />,
  'cybercrime-scams': <CybercrimeScams />,
  'consumer-protection': <ConsumerProtection />
};

function BlogContent() {
  const searchParams = useSearchParams();
  const search = searchParams.get('blog');
  const selectedComponent = componentMappings[search as BlogThemes];

  return (
    <>
      <section>
        {selectedComponent}
      </section>
    </>
  )
}

export default BlogContent;