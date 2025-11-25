"use client";

import { Row, Text, Button } from "@once-ui-system/core";

export default function ResumePage() {
  return (
    <Row
      as="div"
      fillWidth
      fillHeight
      style={{
        width: "50vw",
        height: "100vh",
        padding: 0,
        margin: 0,
        flexDirection: "column",
      }}
    >
      {/* Header */}
      <Row
        fillWidth
        padding="12"
        vertical="center"
        horizontal="center"
        background="page"
        borderBottom="neutral-alpha-weak"
        gap="20"   // ← added spacing here
        style={{ height: "64px" }}
      >
        <Text variant="body-strong-l">Resume</Text>

        <Button
          variant="primary"
          size="m"
          href="/resume_final.pdf"
          download="Aref-Rezai-Resume.pdf"
        >
          Download PDF
        </Button>
      </Row>

      {/* PDF Viewer */}
      <Row fillWidth fillHeight style={{ flex: 1 }}>
        <iframe
          src="/resume_final.pdf"
          style={{
            width: "100%",
            height: "100%",
            border: "none",
          }}
        />
      </Row>
    </Row>
  );
}
