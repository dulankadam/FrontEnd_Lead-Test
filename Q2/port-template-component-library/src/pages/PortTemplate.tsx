import React, { useState } from "react";
import {
  Button,
  Card,
  CollapsibleSection,
  IconButton,
  ListItem,
} from "../components";

const PortTemplate: React.FC = () => {
  const [catalogId] = useState<string>("c7");
  const [type] = useState<string>("Computer");
  const [model] = useState<string>("Camera");
  const [portItems, setPortItems] = useState<string[]>([
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
  ]);

  const handleDeletePort = (index: number): void => {
    setPortItems(portItems.filter((_, i) => i !== index));
  };

  return (
    <div className="min-vh-100 py-5">
      <div className="container">
        <Card className="mx-auto max-w-1000px">
          {/* Header */}
          <div className="card-body border-bottom">
            <div className="row">
              <div className="col-md-9">
                <div className="mb-3">
                  <div className="row align-items-center">
                    <div className="col-3">
                      <span className="text-secondary fw-medium">
                        Catalog ID
                      </span>
                    </div>
                    <div className="col-9">
                      <span className="text-dark">{catalogId}</span>
                    </div>
                  </div>
                </div>
                <div className="mb-3">
                  <div className="row align-items-center">
                    <div className="col-3">
                      <span className="text-secondary fw-medium">Type</span>
                    </div>
                    <div className="col-9">
                      <span className="text-muted">{type}</span>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="row align-items-center">
                    <div className="col-3">
                      <span className="text-secondary fw-medium">Model</span>
                    </div>
                    <div className="col-9">
                      <span className="text-muted">{model}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3 d-flex justify-content-end">
                <div className="catalog-icon">
                  <svg
                    width="48"
                    height="48"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M4 4h16v12H4z M20 18l-3-3H7l-3 3z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Fields Section */}
          <CollapsibleSection title="Fields" defaultOpen={true}>
            <div className="text-muted small">No fields configured</div>
          </CollapsibleSection>

          {/* Port Template Section */}
          <CollapsibleSection title="Port Template" defaultOpen={true}>
            <div>
              <div className="mb-4">
                <IconButton
                  icon={
                    <span
                      className="text-primary fs-3"
                      style={{ lineHeight: 1 }}
                    >
                      +
                    </span>
                  }
                  onClick={() => {}}
                />
              </div>

              <div>
                {portItems.map((item, index) => (
                  <ListItem
                    key={index}
                    label={item}
                    onDelete={() => handleDeletePort(index)}
                  />
                ))}
              </div>
            </div>
          </CollapsibleSection>

          {/* Documents Section */}
          <CollapsibleSection title="Documents" defaultOpen={false}>
            <div className="text-muted small">No documents uploaded</div>
          </CollapsibleSection>

          {/* Footer */}
          <div className="card-body border-top">
            <div className="d-flex justify-content-end gap-3">
              <Button variant="secondary">Back</Button>
              <Button variant="primary">Save</Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default PortTemplate;
